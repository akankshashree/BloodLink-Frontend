(() => {

const FAQ = [
{
q: "Why should I donate blood?",
a: "Blood donations help hospitals treat patients who need transfusions, including people with severe blood loss or anemia, patients undergoing surgery, and some people receiving cancer treatment."
},
{
q: "Which blood group can I donate to?",
a: "For red-cell donation, O- can generally donate to all ABO/Rh groups. A- can donate to A-, A+, AB- and AB+. B- can donate to B-, B+, AB- and AB+. AB- can donate to AB-. Blood banks confirm compatibility before transfusion."
},
{
q: "Does donating blood cause iron loss?",
a: "Yes. Whole-blood donation removes red blood cells and therefore some iron. Repeated donations can lower iron stores in some donors. Eat a balanced diet and speak with a healthcare professional before taking iron supplements."
},
{
q: "What foods contain iron?",
a: "Iron-rich foods include meat and seafood, beans and lentils, tofu, fortified cereals, spinach and other leafy greens. Vitamin C can help the body absorb iron from plant foods."
},
{
q: "Does blood donation hurt?",
a: "You may feel a brief pinch when the needle is inserted. Some donors experience temporary bruising, light-headedness or tiredness. Tell donation staff if you feel unwell."
},
{
q: "How much blood is taken?",
a: "The amount depends on the donation type and local blood-service rules. A standard whole-blood donation is commonly around 450 mL, but local rules can differ."
},
{
q: "How often can I donate?",
a: "The interval depends on the donation type and local blood-service rules. BloodLink also checks its configured minimum interval before creating a match."
},
{
q: "Can I donate if I am sick?",
a: "If you have a fever or are feeling unwell, check with the blood donation service before donating. Eligibility can also depend on medicines and recent illness."
},
{
q: "Can I donate after a tattoo or piercing?",
a: "Deferral rules after tattoos or piercings vary by blood service and location. Check with the blood bank that will collect your donation."
},
{
q: "Am I eligible to donate?",
a: "Eligibility can depend on age, health, weight, recent illness or procedures, medicines and donation history. BloodLink helps with matching but does not medically clear you to donate."
},
{
q: "What happens when I donate?",
a: "A typical visit includes registration, health and eligibility screening, the donation itself, and a short recovery period with refreshments. Follow the instructions provided by donation staff."
}
];

const QUICK = [
"Why should I donate blood?",
"Which blood group can I donate to?",
"Does donating blood cause iron loss?",
"Am I eligible to donate?",
"What happens when I donate?"
];

function findAnswer(text) {

    text = text.toLowerCase();

    let best = null;
    let score = 0;

    FAQ.forEach(item => {

        let current = 0;

        item.q.toLowerCase()
            .split(/\s+/)
            .forEach(word => {

                if (word.length > 3 && text.includes(word)) {
                    current++;
                }

            });

        if (current > score) {
            score = current;
            best = item;
        }

    });

    return best;
}


function addMessage(chat, text, type) {

    const row = document.createElement("div");
    row.className = `bla-message ${type}`;

    const bubble = document.createElement("div");
    bubble.className = "bla-bubble";
    bubble.textContent = text;

    row.appendChild(bubble);
    chat.appendChild(row);

    chat.scrollTop = chat.scrollHeight;
}


function init() {

    if (document.getElementById("bloodlinkAssistant")) return;


    const style = document.createElement("style");

    style.textContent = `

#bloodlinkAssistant{
    position:fixed;
    right:24px;
    bottom:24px;
    z-index:99999;
    font-family:"DM Sans",sans-serif;
}

.bla-toggle{
    border:0;
    background:#c81d25;
    color:white;
    border-radius:50px;
    padding:13px 18px;
    font-weight:800;
    box-shadow:0 10px 30px rgba(0,0,0,.18);
    cursor:pointer;
}

.bla-toggle:hover{
    background:#a9151d;
}

.bla-panel{
    display:none;
    width:370px;
    max-width:calc(100vw - 30px);
    height:535px;
    background:white;
    border:1px solid #eee;
    border-radius:20px;
    box-shadow:0 18px 55px rgba(0,0,0,.18);
    overflow:hidden;
    margin-bottom:12px;
}

.bla-panel.open{
    display:flex;
    flex-direction:column;
}

.bla-header{
    background:#181818;
    color:white;
    padding:17px 18px;
    display:flex;
    justify-content:space-between;
}

.bla-title{
    font-family:"Manrope",sans-serif;
    font-weight:800;
}

.bla-subtitle{
    display:block;
    color:#aaa;
    font-size:.7rem;
    margin-top:3px;
}

.bla-close{
    background:none;
    border:0;
    color:#bbb;
    font-size:1.3rem;
    cursor:pointer;
}

.bla-chat{
    flex:1;
    overflow-y:auto;
    padding:15px;
    background:#fafafa;
}

.bla-message{
    display:flex;
    margin-bottom:10px;
}

.bla-message.user{
    justify-content:flex-end;
}

.bla-bubble{
    max-width:87%;
    padding:10px 12px;
    border-radius:13px;
    font-size:.77rem;
    line-height:1.55;
}

.bla-message.bot .bla-bubble{
    background:white;
    border:1px solid #eee;
    border-top-left-radius:4px;
}

.bla-message.user .bla-bubble{
    background:#c81d25;
    color:white;
    border-top-right-radius:4px;
}

.bla-quick{
    display:flex;
    gap:6px;
    overflow-x:auto;
    padding:9px 11px;
    background:white;
    border-top:1px solid #eee;
}

.bla-chip{
    white-space:nowrap;
    border:1px solid #ddd;
    background:white;
    border-radius:50px;
    padding:7px 10px;
    font-size:.66rem;
    font-weight:700;
    cursor:pointer;
}

.bla-chip:hover{
    border-color:#c81d25;
    color:#c81d25;
}

.bla-input-row{
    display:flex;
    gap:7px;
    padding:9px 11px;
    background:white;
}

.bla-input{
    flex:1;
    border:1px solid #ddd;
    border-radius:10px;
    padding:9px;
    font-size:.77rem;
    outline:none;
}

.bla-input:focus{
    border-color:#c81d25;
}

.bla-send{
    width:42px;
    border:0;
    border-radius:10px;
    background:#c81d25;
    color:white;
}

.bla-note{
    font-size:.6rem;
    color:#888;
    padding:0 11px 9px;
    background:white;
}

@media(max-width:500px){

    #bloodlinkAssistant{
        right:10px;
        bottom:10px;
    }

    .bla-panel{
        height:500px;
    }

}

`;

    document.head.appendChild(style);


    const root = document.createElement("div");

    root.id = "bloodlinkAssistant";

    root.innerHTML = `

<div class="bla-panel" id="blaPanel">

    <div class="bla-header">

        <div>
            <div class="bla-title">
                🩸 BloodLink Assistant
            </div>

            <span class="bla-subtitle">
                Quick answers about blood donation
            </span>
        </div>

        <button
            class="bla-close"
            id="blaClose">
            ×
        </button>

    </div>


    <div
        class="bla-chat"
        id="blaChat">
    </div>


    <div
        class="bla-quick"
        id="blaQuick">
    </div>


    <div class="bla-input-row">

        <input
            id="blaInput"
            class="bla-input"
            placeholder="Ask a donation question..."
        >

        <button
            id="blaSend"
            class="bla-send">

            <i class="bi bi-send-fill"></i>

        </button>

    </div>


    <div class="bla-note">

        General information only —
        not medical clearance or personal medical advice.

    </div>

</div>


<button
    id="blaToggle"
    class="bla-toggle">

    <i class="bi bi-droplet-fill me-1"></i>

    Ask BloodLink

</button>

`;

    document.body.appendChild(root);


    const panel =
        document.getElementById("blaPanel");

    const chat =
        document.getElementById("blaChat");

    const input =
        document.getElementById("blaInput");


    addMessage(
        chat,
        "Hi! 👋 I’m BloodLink Assistant. Ask me about blood groups, donation, iron loss, eligibility or recovery.",
        "bot"
    );


    const quick =
        document.getElementById("blaQuick");


    QUICK.forEach(question => {

        const button =
            document.createElement("button");

        button.className = "bla-chip";

        button.textContent = question;

        button.onclick = () =>
            sendMessage(question);

        quick.appendChild(button);

    });


    function sendMessage(question) {

        question = question.trim();

        if (!question) return;

        addMessage(
            chat,
            question,
            "user"
        );


        const result =
            findAnswer(question);


        setTimeout(() => {

            if (result) {

                addMessage(
                    chat,
                    result.a,
                    "bot"
                );

            } else {

                addMessage(
                    chat,
                    "I can answer common questions about blood groups, donation, iron loss, eligibility and recovery. For personal medical advice, please consult a qualified healthcare professional or your blood donation service.",
                    "bot"
                );

            }

        }, 150);


        input.value = "";

    }


    document
        .getElementById("blaToggle")
        .onclick = () => {

            panel.classList.toggle("open");

            if (panel.classList.contains("open")) {
                input.focus();
            }

        };


    document
        .getElementById("blaClose")
        .onclick = () => {

            panel.classList.remove("open");

        };


    document
        .getElementById("blaSend")
        .onclick = () => {

            sendMessage(input.value);

        };


    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage(input.value);

            }

        }
    );

}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}

})();