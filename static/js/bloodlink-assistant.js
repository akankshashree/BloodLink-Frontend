(() => {

/* ============================================================
   BLOODLINK ASSISTANT
   FAQ + MENTAL HEALTH + PERSONAL DASHBOARD CONTEXT
============================================================ */


/* ============================================================
   1. EXISTING FAQ KNOWLEDGE BASE
============================================================ */

const FAQ = [

/* ---------------- BLOOD DONATION ---------------- */

{
q: "Why should I donate blood?",
a: "Blood donations help hospitals treat patients who need transfusions, including people with severe blood loss or anemia, patients undergoing surgery, and some people receiving cancer treatment."
},

{
q: "Which blood group can I donate to?",
a: "For red-cell donation, O- can generally donate to all ABO/Rh groups. A- can donate to A-, A+, AB- and AB+. B- can donate to B-, B+, AB- and AB+. AB- can donate to AB-. Hospitals confirm compatibility through proper blood typing and cross-matching."
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
},

{
q: "Can I donate blood on an empty stomach?",
a: "Donation services generally recommend eating a suitable meal and staying hydrated before donating. Follow the preparation instructions provided by your local blood bank."
},

{
q: "What should I do before donating blood?",
a: "Get adequate rest, eat appropriately, drink fluids and bring any information requested by the donation service. Follow the blood bank's specific preparation instructions."
},

{
q: "What should I do after donating blood?",
a: "Rest briefly, drink fluids and follow the recovery instructions given by the donation staff. Avoid strenuous activity if the donation service advises you to do so."
},

{
q: "Can I donate if I have anemia?",
a: "Anemia or low hemoglobin can affect donation eligibility. Do not use BloodLink to determine whether you can donate; the blood donation service should assess you."
},

{
q: "Can I donate while taking medicine?",
a: "Some medicines affect donation eligibility while others do not. Tell the donation staff about medicines you take and follow their guidance."
},

{
q: "Can I donate if I am pregnant?",
a: "Pregnancy can affect blood donation eligibility. If you are pregnant or recently gave birth, check with your local blood donation service."
},

{
q: "Can young people donate blood?",
a: "Age requirements vary by country and blood service. Check the eligibility rules of the blood bank where you plan to donate."
},

{
q: "Can older people donate blood?",
a: "Eligibility depends on age, health and local blood-service rules. The donation service makes the final eligibility decision."
},

{
q: "Why is blood type important?",
a: "Blood type describes important characteristics of red blood cells, including ABO and Rh groups. Matching blood types correctly helps reduce transfusion risks."
},

{
q: "What is O negative?",
a: "O-negative red blood cells can generally be given to people of all ABO/Rh groups in emergency red-cell transfusion settings. Hospitals still follow proper transfusion protocols and testing."
},

{
q: "What is AB positive?",
a: "AB-positive recipients can generally receive red cells from all ABO/Rh groups when appropriately tested."
},

{
q: "What is a universal donor?",
a: "O-negative is commonly described as the universal red-cell donor. This refers specifically to red-cell compatibility, not every type of blood component."
},

{
q: "What is a universal plasma donor?",
a: "AB plasma is commonly considered universal plasma because it does not contain anti-A or anti-B antibodies. Plasma compatibility differs from red-cell compatibility."
},

{
q: "Can my blood help more than one person?",
a: "A whole-blood donation can be separated into components such as red cells, plasma and platelets. Depending on the blood service and clinical need, components may help different patients."
},

{
q: "How long does blood donation take?",
a: "The entire visit includes registration, screening, donation and recovery. The actual collection is only one part of the visit, and timing varies by donation service."
},

{
q: "Why do blood banks need regular donors?",
a: "Blood has a limited storage life, and hospitals continuously need blood and blood components. Regular voluntary donors help maintain a reliable supply."
},

{
q: "Can I donate blood if I feel dizzy?",
a: "If you are currently feeling dizzy or unwell, tell the donation staff and do not rely on the chatbot to determine your eligibility."
},

{
q: "Why do I feel tired after donating?",
a: "Some donors experience temporary tiredness or light-headedness after donation. Rest, fluids and following the donation service's recovery instructions can help."
},

{
q: "Why do I feel dizzy after donating?",
a: "Some people experience temporary light-headedness after donation. Sit or lie down and inform donation staff if this happens. Seek medical help if symptoms are severe or persistent."
},


/* ============================================================
   MENTAL HEALTH
============================================================ */

{
q: "Why do I feel stressed at the hospital?",
a: "Hospitals can involve uncertainty, time pressure, long waits, difficult decisions and exposure to illness. Feeling stressed in such situations can happen. Try taking a short pause, breathing slowly and talking with someone you trust."
},

{
q: "Is it normal to feel overwhelmed during a medical emergency?",
a: "Yes. Emergencies can create intense emotional and physical stress. Focus on the next practical step, communicate with the healthcare team and take a brief pause when it is safe."
},

{
q: "How can I calm myself when everything feels urgent?",
a: "Try slowing your breathing, focusing on one task at a time and identifying what needs attention immediately versus what can wait. If possible, ask another person for support."
},

{
q: "What can I do when hospital pressure becomes too much?",
a: "If it is safe, step away briefly, hydrate, breathe slowly and tell a colleague, supervisor or trusted person that you are struggling. Persistent or severe distress deserves professional support."
},

{
q: "How do I handle constant pressure from patients or relatives?",
a: "Try to communicate calmly, set realistic expectations and involve the appropriate hospital team when necessary. You do not have to handle every situation alone."
},

{
q: "Why can't I stop thinking about what happened at the hospital?",
a: "Difficult medical experiences can stay on your mind afterward. Talking about the experience with someone you trust and allowing yourself time to recover may help. If intrusive memories continue or interfere with daily life, consider professional support."
},

{
q: "How can I deal with emotional pressure during blood emergencies?",
a: "Focus on the immediate task, communicate clearly with the healthcare team and take short recovery pauses when possible. Emotional reactions during emergencies are understandable."
},

{
q: "What should I do if I feel mentally exhausted?",
a: "Acknowledge the exhaustion rather than ignoring it. Rest when possible, stay hydrated, eat regularly and talk to someone you trust. If exhaustion persists or affects daily functioning, consider professional support."
},

{
q: "How do I manage stress during long hospital shifts?",
a: "Use short breaks when possible, hydrate, eat regularly, stretch or walk briefly and stay connected with colleagues. Recovery outside work is also important."
},

{
q: "How can I take a mental break when I can't leave the hospital?",
a: "Even a few minutes can help. Step somewhere quiet if possible, take slow breaths, relax your shoulders, drink some water and focus on something unrelated to the immediate situation."
},

{
q: "What are signs that stress is becoming too much?",
a: "Persistent sleep problems, constant irritability, difficulty concentrating, emotional exhaustion, withdrawal or feeling unable to cope can be signs that you need additional support."
},

{
q: "Can hospital work affect my mental health?",
a: "Yes. Long hours, workload, time pressure, exposure to suffering and limited support can contribute to stress and burnout."
},

{
q: "How do I deal with an extremely busy shift?",
a: "Prioritize urgent tasks, communicate with your team, take brief recovery pauses when safe and ask for help when workload becomes unmanageable."
},

{
q: "What can I do when I feel like I have no control?",
a: "Focus on the things you can influence right now. Break the situation into small actions and communicate with someone who can share the responsibility."
},

{
q: "How do I manage pressure when someone urgently needs blood?",
a: "Use BloodLink to coordinate donor matching, communicate with the hospital team and focus on the immediate steps that are within your control."
},


/* ---------------- ANXIETY ---------------- */

{
q: "Why am I feeling anxious before donating blood?",
a: "It is common to feel nervous about needles, medical settings or the donation process. Tell the donation staff about your anxiety so they can guide you through the process."
},

{
q: "What if I'm scared of needles?",
a: "Tell the donation staff before the procedure. Looking away, breathing slowly and keeping your attention on something else may help."
},

{
q: "What can I do if I panic before donation?",
a: "Tell the staff that you are feeling panicked. Sit somewhere safe, breathe slowly and give yourself time."
},

{
q: "How do I calm down during a panic-like feeling?",
a: "Move to a safe place if possible, breathe slowly and focus on what you can see and hear around you. If symptoms are severe, new or concerning, seek appropriate medical help."
},

{
q: "Why does my heart race when I'm anxious?",
a: "Anxiety can activate the body's stress response, which may increase heart rate and breathing. If you have severe, persistent or unexplained symptoms, seek medical advice."
},

{
q: "What if I feel nervous about entering a hospital?",
a: "Hospital environments can feel intimidating. Give yourself time, breathe slowly and consider going with someone you trust if that is possible."
},

{
q: "How can I stop overthinking a patient's condition?",
a: "Focus on the information and actions that are actually within your role. If you are part of the care team, communicate concerns through the appropriate clinical channels."
},

{
q: "What can I do when anxiety makes it difficult to focus?",
a: "Pause briefly, slow your breathing and break the task into smaller steps. If anxiety repeatedly interferes with your daily life, consider talking with a mental-health professional."
},

{
q: "Is feeling nervous before donating normal?",
a: "Yes. Many people feel nervous before a medical procedure or blood donation. Donation staff are used to helping nervous donors."
},

{
q: "What should I do if I feel overwhelmed by fear?",
a: "Move somewhere safe, slow your breathing and reach out to someone you trust. If the fear is severe or persistent, consider professional support."
},

{
q: "How can breathing exercises help with stress?",
a: "Slow, controlled breathing can help you pause and reduce the body's stress response."
},

{
q: "What can I do if I can't calm myself down?",
a: "Move to a safe environment and contact someone you trust. If you feel unsafe or believe you may hurt yourself or someone else, seek immediate professional or emergency help."
},


/* ---------------- HEALTHCARE WORKERS ---------------- */

{
q: "How do healthcare workers deal with emotional exhaustion?",
a: "Supportive colleagues, adequate rest, reasonable workload, regular breaks and access to professional mental-health support can help."
},

{
q: "What is burnout?",
a: "Burnout is associated with chronic workplace stress that has not been successfully managed. It can involve exhaustion, increased mental distance from work and reduced professional effectiveness."
},

{
q: "How do I know if I might be experiencing burnout?",
a: "Persistent exhaustion, feeling detached or negative about work and difficulty maintaining normal effectiveness can be warning signs. A professional can help assess what you are experiencing."
},

{
q: "What's the difference between stress and burnout?",
a: "Stress can be a response to demanding situations and may improve with recovery. Burnout is associated with prolonged workplace stress and can involve persistent exhaustion and detachment from work."
},

{
q: "Can long shifts affect mental health?",
a: "Long or irregular working hours can contribute to fatigue and stress. Adequate rest, breaks, workload management and workplace support are important."
},

{
q: "Can lack of sleep affect my emotions?",
a: "Yes. Poor sleep can affect mood, concentration, energy and stress tolerance."
},

{
q: "How can healthcare workers protect their mental health?",
a: "Use available breaks, maintain sleep and basic self-care, stay connected with colleagues, communicate workload concerns and seek professional support when needed."
},

{
q: "Why do I feel emotionally numb after repeated emergencies?",
a: "Repeated exposure to stressful or distressing situations can affect emotional responses. If numbness persists or affects your life, consider talking with a mental-health professional."
},

{
q: "Why do I feel guilty after a difficult patient case?",
a: "Difficult cases can lead to guilt even when you acted appropriately. Discussing the situation with a trusted colleague or professional can help you process what happened."
},

{
q: "How do I deal with compassion fatigue?",
a: "Compassion fatigue can occur after prolonged exposure to other people's suffering. Rest, boundaries, peer support and professional support can help."
},

{
q: "What is compassion fatigue?",
a: "Compassion fatigue refers to emotional and physical strain associated with repeatedly caring for or being exposed to people experiencing suffering."
},

{
q: "How do I recover emotionally after a difficult shift?",
a: "Give yourself time to decompress. Hydrate, eat, rest, disconnect from work when possible and talk with someone you trust."
},

{
q: "Is it okay to ask my colleagues for help?",
a: "Yes. Asking for help is an important part of working safely and supporting yourself and your team."
},

{
q: "How can I support a stressed healthcare worker?",
a: "Listen without immediately judging or trying to fix everything. Offer practical help, encourage rest and suggest professional support if distress is persistent or severe."
},

{
q: "What should a hospital team do when everyone is exhausted?",
a: "Teams can communicate workload concerns, redistribute tasks where possible, ensure appropriate breaks and involve supervisors or occupational-health resources when workload becomes unsafe."
},


/* ---------------- FAMILY / CAREGIVERS ---------------- */

{
q: "I'm worried about a family member in hospital. What can I do?",
a: "Ask the healthcare team for clear information, identify what you can practically help with and stay connected with people who support you."
},

{
q: "How do I cope while waiting for blood to be arranged?",
a: "Waiting during an emergency can be extremely stressful. Stay in contact with the hospital team, use BloodLink to coordinate eligible donors and focus on the next practical step."
},

{
q: "How do I handle fear when someone I love needs blood?",
a: "Fear and uncertainty are understandable. Stay connected with the medical team, involve trusted family members and take short breaks to eat, drink and breathe."
},

{
q: "How do I support someone who is seriously ill?",
a: "Listen, help with practical tasks and respect what they need emotionally. You do not have to provide all the support alone."
},

{
q: "Why do I feel helpless when someone is in hospital?",
a: "When someone you love is ill, much of the situation may be outside your control. Focusing on practical things you can do can help."
},

{
q: "How can I cope with uncertainty during treatment?",
a: "Ask the healthcare team what is known, what is still uncertain and what the next step is. Try to focus on the present."
},

{
q: "How do I talk to children about a family member being ill?",
a: "Use simple, honest language appropriate for their age. Encourage questions and reassure them that trusted adults are helping."
},

{
q: "How do I deal with guilt as a caregiver?",
a: "Caregiving can create unrealistic expectations about what you should be able to do. Talk with someone you trust and remember that needing rest or help does not mean you are failing."
},

{
q: "How can caregivers take care of themselves?",
a: "Eat regularly, stay hydrated, rest when possible, accept practical help and maintain contact with supportive people."
},

{
q: "What if I'm too emotionally exhausted to support someone else?",
a: "Tell someone you trust that you are struggling and ask for practical help."
},


/* ---------------- GRIEF ---------------- */

{
q: "How do I cope when a patient doesn't survive?",
a: "Losing a patient can be deeply difficult. Give yourself permission to grieve, speak with trusted colleagues and use professional support if needed."
},

{
q: "How do I deal with grief after losing someone in hospital?",
a: "Grief can look different for everyone. Stay connected with supportive people, allow yourself time and consider professional grief support if you are struggling."
},

{
q: "Is it normal to feel numb after someone's death?",
a: "Emotional numbness can occur after a distressing loss. If it persists or significantly affects your daily life, consider speaking with a mental-health professional."
},

{
q: "Why do I keep replaying a difficult hospital experience?",
a: "Distressing experiences can sometimes replay in your thoughts. If these memories are persistent or interfere with daily life, professional support can help."
},

{
q: "How can I support someone who has lost a loved one?",
a: "Listen, be present and offer practical help. Avoid pressuring them to recover quickly."
},

{
q: "When should I talk to a mental-health professional after a loss?",
a: "Consider professional support when grief becomes overwhelming, interferes with daily life or you feel unable to cope safely."
},

{
q: "How do I deal with guilt after losing someone?",
a: "Guilt can occur after a loss, even when events were outside your control. Talking through what happened with a trusted person or professional may help."
},

{
q: "Why do I feel angry after someone dies?",
a: "Anger can be part of grief. Allow yourself to acknowledge the feeling without acting in ways that could harm yourself or others."
},

{
q: "Is crying after a difficult experience normal?",
a: "Yes. Crying can be a normal emotional response to stress, grief or difficult experiences."
},

{
q: "How can I process a traumatic hospital experience?",
a: "Give yourself time, stay connected with supportive people and consider speaking with a mental-health professional, especially if memories, anxiety or sleep problems continue."
},


/* ---------------- RECOVERY ---------------- */

{
q: "How can I sleep after a stressful hospital shift?",
a: "Create a quiet wind-down period, reduce stimulating activities before bed and keep your sleep environment comfortable."
},

{
q: "Why can't I relax after leaving the hospital?",
a: "After prolonged stress, the body can take time to shift out of a high-alert state. A quiet routine, slow breathing and time away from work may help."
},

{
q: "How can I recover after a long shift?",
a: "Prioritize sleep, hydration, food, gentle movement and time away from work-related stimulation."
},

{
q: "What are simple ways to reduce stress?",
a: "Try slow breathing, a short walk, stretching, talking to someone you trust, adequate sleep and taking short breaks."
},

{
q: "Why is taking breaks important?",
a: "Short breaks can give your mind and body an opportunity to recover from sustained attention and stress."
},

{
q: "How can I look after myself while caring for someone else?",
a: "Maintain basic sleep, food and hydration, accept help from others and make small periods of time for yourself."
},

{
q: "What should I do when I feel completely drained?",
a: "Assess what you need immediately: rest, food, water, support or medical attention. If exhaustion persists, seek professional advice."
},

{
q: "When should I seek professional mental-health support?",
a: "Consider professional support when distress, anxiety, low mood, sleep problems, intrusive memories or exhaustion persist or interfere with daily life."
},


/* ---------------- EMERGENCY ---------------- */

{
q: "What should I do if I feel like I can't cope anymore?",
a: "Please do not handle that feeling alone. Contact someone you trust and seek professional mental-health support. If you may be in immediate danger, contact emergency services or go to the nearest emergency department."
},

{
q: "What if I feel unsafe?",
a: "Move to a safer place and contact someone you trust immediately. If there is immediate danger, contact local emergency services or go to the nearest emergency department."
},

{
q: "What should I do if I'm having thoughts of hurting myself?",
a: "Please get human support now. Tell someone you trust, stay with another person if possible, and contact emergency services or a mental-health crisis service. In India, Tele-MANAS can be reached at 14416 or 1800-89-14416."
},

{
q: "How can I help someone who says they don't want to live?",
a: "Stay with them if it is safe, listen without judgment and encourage immediate professional help. If they are in immediate danger, contact emergency services or take them to the nearest emergency department."
},

{
q: "What should I do if someone is in immediate danger?",
a: "Contact your local emergency service immediately and stay with the person if it is safe to do so."
}

];


/* ============================================================
   2. MY BLOODLINK DATA
============================================================ */

let MY_BLOODLINK = null;


async function loadMyBloodLinkData(){

    try{

        const user =
            JSON.parse(
                localStorage.getItem(
                    "bloodlink_user"
                ) || "null"
            );


        if(!user) return;


        MY_BLOODLINK = {

            role:
                user.role,

            name:
                user.first_name ||
                user.username ||
                "there",

            bloodGroup:null,

            address:null,

            available:null,

            dashboard:{},

            matches:[],

            requests:[],

            notifications:[],

            donations:[]

        };


        /* Dashboard */

        if(
            typeof getDashboard ===
            "function"
        ){

            try{

                MY_BLOODLINK.dashboard =
                    await getDashboard();

            }catch(e){

                console.warn(
                    "Dashboard context unavailable",
                    e
                );

            }

        }


        /* Donor profile */

        if(
            user.role === "DONOR" &&
            typeof getDonorProfile ===
            "function"
        ){

            try{

                const profile =
                    await getDonorProfile();


                MY_BLOODLINK.bloodGroup =
                    profile.blood_group ||
                    null;


                MY_BLOODLINK.address =
                    profile.address ||
                    null;


                MY_BLOODLINK.available =
                    profile.is_available;

            }catch(e){

                console.warn(
                    "Donor profile unavailable",
                    e
                );

            }

        }


        /* Donor matches */

        if(
            user.role === "DONOR" &&
            typeof getMatches ===
            "function"
        ){

            try{

                const matches =
                    await getMatches();


                MY_BLOODLINK.matches =
                    Array.isArray(matches)
                    ? matches
                    : (
                        matches.results ||
                        matches.matches ||
                        []
                    );

            }catch(e){

                console.warn(
                    "Matches unavailable",
                    e
                );

            }

        }


        /* Requester requests */

        if(
            user.role === "REQUESTER" &&
            typeof getBloodRequests ===
            "function"
        ){

            try{

                const requests =
                    await getBloodRequests();


                MY_BLOODLINK.requests =
                    Array.isArray(requests)
                    ? requests
                    : (
                        requests.results ||
                        requests.requests ||
                        []
                    );

            }catch(e){

                console.warn(
                    "Requests unavailable",
                    e
                );

            }

        }


        /* Notifications */

        if(
            typeof getNotifications ===
            "function"
        ){

            try{

                const notifications =
                    await getNotifications();


                MY_BLOODLINK.notifications =
                    Array.isArray(
                        notifications
                    )
                    ? notifications
                    : (
                        notifications.results ||
                        notifications.notifications ||
                        []
                    );

            }catch(e){

                console.warn(
                    "Notifications unavailable",
                    e
                );

            }

        }


        /* Donations */

        if(
            typeof getDonations ===
            "function"
        ){

            try{

                const donations =
                    await getDonations();


                MY_BLOODLINK.donations =
                    Array.isArray(donations)
                    ? donations
                    : (
                        donations.results ||
                        donations.donations ||
                        []
                    );

            }catch(e){

                console.warn(
                    "Donations unavailable",
                    e
                );

            }

        }

    }catch(error){

        console.warn(
            "BloodLink context error:",
            error
        );

    }

}


/* ============================================================
   3. DATE FORMATTER
============================================================ */

function formatBLDate(value){

    if(!value){

        return "not available";

    }


    const date =
        new Date(value);


    if(
        Number.isNaN(
            date.getTime()
        )
    ){

        return String(value);

    }


    return date.toLocaleString(
        undefined,
        {
            dateStyle:"medium",
            timeStyle:"short"
        }
    );

}


/* ============================================================
   4. PERSONAL DASHBOARD QUESTIONS
============================================================ */

function dashboardAnswer(question){

    if(!MY_BLOODLINK){

        return null;

    }


    const q =
        question
        .toLowerCase()
        .trim();


    const data =
        MY_BLOODLINK;


    /* =====================
       DONOR PROFILE
    ===================== */

    if(
        /my blood group|
         my blood type|
         what blood group do i have|
         what is my blood group/x.test(q)
    ){

        return data.bloodGroup

            ? `Your registered blood group is ${data.bloodGroup}.`

            : "I couldn't find your blood group in your donor profile.";

    }


    if(
        /my address|
         my location|
         where am i registered|
         where is my location/x.test(q)
    ){

        return data.address

            ? `Your registered location is ${data.address}.`

            : "I couldn't find a saved address in your profile.";

    }


    if(
        /am i available|
         my availability|
         available to donate|
         donor status/x.test(q)
    ){

        if(
            data.available === true
        ){

            return "Your donor status is currently Available.";

        }


        if(
            data.available === false
        ){

            return "Your donor status is currently Unavailable.";

        }


        return "I couldn't find your current availability status.";

    }


    /* =====================
       DONOR MATCHES
    ===================== */

    if(
        data.role === "DONOR" &&
        /how many matches|
         how many requests|
         my matches|
         requests received/x.test(q)
    ){

        const count =
            data.matches.length;


        return `You currently have ${count} blood request match${count === 1 ? "" : "es"}.`;

    }


    if(
        data.role === "DONOR" &&
        /which hospital|
         requesting hospital|
         hospital needs/x.test(q) &&
        data.matches.length
    ){

        const match =
            data.matches[0];

        const request =
            match.request || {};


        return `Your latest matched request is from ${request.hospital_name || "the hospital"}${match.distance_km != null ? `, approximately ${match.distance_km} km away` : ""}.`;

    }


    if(
        data.role === "DONOR" &&
        /how far|
         distance|
         how many km|
         near/x.test(q) &&
        data.matches.length
    ){

        const distance =
            data.matches[0]
                .distance_km;


        return distance != null

            ? `Your latest matched hospital is approximately ${distance} km away.`

            : "I don't have a distance value for your latest match.";

    }


    if(
        data.role === "DONOR" &&
        /how many units|
         units needed|
         units required/x.test(q) &&
        data.matches.length
    ){

        const request =
            data.matches[0]
                .request || {};


        return `The latest matched request requires ${request.units_required ?? "an unspecified number"} unit${request.units_required == 1 ? "" : "s"} of ${request.blood_group || data.bloodGroup || "blood"}.`;

    }


    if(
        data.role === "DONOR" &&
        /blood group requested|
         what blood.*needed|
         what group.*needed/x.test(q) &&
        data.matches.length
    ){

        const request =
            data.matches[0]
                .request || {};


        return `The latest matched request is for ${request.blood_group || "an unspecified blood group"} blood.`;

    }


    if(
        data.role === "DONOR" &&
        /match status|
         status of my match|
         accepted.*match|
         declined.*match|
         notified/x.test(q) &&
        data.matches.length
    ){

        return `Your latest match status is ${data.matches[0].status || "not available"}.`;

    }


    if(
        data.role === "DONOR" &&
        /request status|
         is the request open|
         request still open/x.test(q) &&
        data.matches.length
    ){

        const request =
            data.matches[0]
                .request || {};


        return `The latest request status is ${request.status || "not available"}.`;

    }


    if(
        data.role === "DONOR" &&
        /urgency|
         how urgent/x.test(q) &&
        data.matches.length
    ){

        const request =
            data.matches[0]
                .request || {};


        return `The latest matched request has ${request.urgency || "unspecified"} urgency.`;

    }


    if(
        data.role === "DONOR" &&
        /when.*request|
         request.*date|
         created.*request|
         date.*request/x.test(q) &&
        data.matches.length
    ){

        const request =
            data.matches[0]
                .request || {};


        return `The latest request was created on ${formatBLDate(request.created_at)}.`;

    }


    /* =====================
       REQUESTER
    ===================== */

    if(
        data.role === "REQUESTER" &&
        /how many requests|
         my requests|
         requests have i made|
         number of requests/x.test(q)
    ){

        const count =
            data.requests.length;


        return `You currently have ${count} blood request${count === 1 ? "" : "s"} in BloodLink.`;

    }


    if(
        data.role === "REQUESTER" &&
        /active request|
         active blood request|
         open request/x.test(q)
    ){

        const active =
            data.requests.filter(
                request =>
                    [
                        "OPEN",
                        "PARTIALLY_FULFILLED"
                    ].includes(
                        String(
                            request.status || ""
                        ).toUpperCase()
                    )
            );


        if(!active.length){

            return "You don't currently have an open or partially fulfilled request.";

        }


        const request =
            active[0];


        return `Your active request is for ${request.blood_group || "unspecified"} blood at ${request.hospital_name || "the selected hospital"}, for ${request.units_required ?? "an unspecified number"} unit${request.units_required == 1 ? "" : "s"}.`;

    }


    if(
        data.role === "REQUESTER" &&
        /my requested blood|
         blood group.*request|
         what blood.*request/x.test(q)
    ){

        const request =
            data.requests[0];


        return request

            ? `Your latest blood request is for ${request.blood_group || "an unspecified blood group"}.`

            : "You don't have a blood request recorded yet.";

    }


    if(
        data.role === "REQUESTER" &&
        /which hospital|
         my hospital|
         hospital.*request/x.test(q)
    ){

        const request =
            data.requests[0];


        return request

            ? `Your latest request is associated with ${request.hospital_name || "the selected hospital"}${request.hospital_address ? `, ${request.hospital_address}` : ""}.`

            : "You don't have a blood request recorded yet.";

    }


    if(
        data.role === "REQUESTER" &&
        /how many units|
         units.*request|
         units required/x.test(q)
    ){

        const request =
            data.requests[0];


        return request

            ? `Your latest request requires ${request.units_required ?? "an unspecified number"} unit${request.units_required == 1 ? "" : "s"} of blood.`

            : "You don't have a blood request recorded yet.";

    }


    if(
        data.role === "REQUESTER" &&
        /fulfilled|
         how many.*fulfilled/x.test(q)
    ){

        const request =
            data.requests[0];


        return request

            ? `Your latest request has ${request.units_fulfilled ?? 0} unit${request.units_fulfilled == 1 ? "" : "s"} fulfilled out of ${request.units_required ?? "the requested total"}.`

            : "You don't have a blood request recorded yet.";

    }


    if(
        data.role === "REQUESTER" &&
        /request status|
         is my request open|
         status of my request/x.test(q)
    ){

        const request =
            data.requests[0];


        return request

            ? `Your latest request status is ${request.status || "not available"}.`

            : "You don't have a blood request recorded yet.";

    }


    if(
        data.role === "REQUESTER" &&
        /urgency|
         how urgent/x.test(q)
    ){

        const request =
            data.requests[0];


        return request

            ? `The urgency of your latest request is ${request.urgency || "not specified"}.`

            : "You don't have a blood request recorded yet.";

    }


    /* =====================
       COMMON USER DATA
    ===================== */

    if(
        /unread notifications|
         unread notification|
         notifications/x.test(q)
    ){

        const count =
            data.dashboard.unread_notifications ??
            data.notifications.filter(
                notification =>
                    !notification.is_read
            ).length;


        return `You currently have ${count} unread notification${count === 1 ? "" : "s"}.`;

    }


    if(
        /donation history|
         my donations|
         how many times.*donat|
         donations/x.test(q)
    ){

        const count =
            data.donations.length;


        return `I found ${count} donation record${count === 1 ? "" : "s"} in your BloodLink history.`;

    }


    if(
        /my dashboard|
         dashboard stats|
         my statistics|
         my stats/x.test(q)
    ){

        const dashboard =
            data.dashboard || {};


        if(
            data.role === "DONOR"
        ){

            const matches =
                dashboard.total_matches ??
                data.matches.length;


            const notifications =
                dashboard.unread_notifications ??
                0;


            return `Your BloodLink dashboard shows ${matches} total match${matches === 1 ? "" : "es"} and ${notifications} unread notification${notifications === 1 ? "" : "s"}.`;

        }


        const requests =
            dashboard.total_requests ??
            data.requests.length;


        return `Your BloodLink dashboard shows ${requests} total request${requests === 1 ? "" : "s"}, ${dashboard.active_requests ?? 0} active and ${dashboard.fulfilled_requests ?? 0} fulfilled.`;

    }


    return null;

}


/* ============================================================
   5. FAQ MATCHING
============================================================ */

function findAnswer(text){

    text =
        text
        .toLowerCase()
        .replace(
            /[^a-z0-9\s-]/g,
            " "
        );


    let best = null;
    let bestScore = 0;


    FAQ.forEach(item => {

        let score = 0;


        item.q
            .toLowerCase()
            .split(/\s+/)
            .forEach(word => {

                if(
                    word.length > 3 &&
                    text.includes(word)
                ){

                    score++;

                }

            });


        if(
            score > bestScore
        ){

            bestScore =
                score;

            best =
                item;

        }

    });


    return best;

}


/* ============================================================
   6. MESSAGE UI
============================================================ */

function addMessage(
    chat,
    text,
    type
){

    const row =
        document.createElement(
            "div"
        );


    row.className =
        `bla-message ${type}`;


    const bubble =
        document.createElement(
            "div"
        );


    bubble.className =
        "bla-bubble";


    bubble.textContent =
        text;


    row.appendChild(
        bubble
    );


    chat.appendChild(
        row
    );


    chat.scrollTop =
        chat.scrollHeight;

}


/* ============================================================
   7. INITIALIZE
============================================================ */

function init(){

    if(
        document.getElementById(
            "bloodlinkAssistant"
        )
    ){

        return;

    }


    loadMyBloodLinkData();


    /* =====================
       CSS
    ===================== */

    const style =
        document.createElement(
            "style"
        );


    style.textContent = `

#bloodlinkAssistant{

    position:fixed;

    right:24px;

    bottom:24px;

    z-index:99999;

    font-family:
        "DM Sans",
        sans-serif;

}

.bla-toggle{

    border:0;

    background:#c81d25;

    color:white;

    border-radius:50px;

    padding:13px 18px;

    font-weight:800;

    box-shadow:
        0 10px 30px
        rgba(0,0,0,.18);

    cursor:pointer;

}

.bla-toggle:hover{

    background:#a9151d;

}

.bla-panel{

    display:none;

    width:370px;

    max-width:
        calc(100vw - 30px);

    height:550px;

    background:white;

    border:1px solid #eee;

    border-radius:20px;

    box-shadow:
        0 18px 55px
        rgba(0,0,0,.18);

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

    font-family:
        "Manrope",
        sans-serif;

    font-weight:800;

    font-size:1rem;

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

.bla-message.bot
.bla-bubble{

    background:white;

    border:1px solid #eee;

    border-top-left-radius:4px;

}

.bla-message.user
.bla-bubble{

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

    padding:
        0 11px 9px;

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

    document.head.appendChild(
        style
    );


    /* =====================
       HTML
    ===================== */

    const root =
        document.createElement(
            "div"
        );


    root.id =
        "bloodlinkAssistant";


    root.innerHTML = `

<div
    class="bla-panel"
    id="blaPanel"
>

    <div class="bla-header">

        <div>

            <div class="bla-title">

                🩸 BloodLink Assistant

            </div>

            <span class="bla-subtitle">

                Blood donation & wellbeing support

            </span>

        </div>

        <button
            class="bla-close"
            id="blaClose"
        >

            ×

        </button>

    </div>


    <div
        class="bla-chat"
        id="blaChat"
    ></div>


    <div
        class="bla-quick"
        id="blaQuick"
    ></div>


    <div class="bla-input-row">

        <input
            id="blaInput"
            class="bla-input"
            placeholder="Ask anything about BloodLink..."
        >


        <button
            id="blaSend"
            class="bla-send"
        >

            <i class="bi bi-send-fill"></i>

        </button>

    </div>


    <div class="bla-note">

        General information only —
        not medical diagnosis or clearance.

    </div>

</div>


<button
    id="blaToggle"
    class="bla-toggle"
>

    <i class="bi bi-droplet-fill me-1"></i>

    Ask BloodLink

</button>

`;


    document.body.appendChild(
        root
    );


    const panel =
        document.getElementById(
            "blaPanel"
        );


    const chat =
        document.getElementById(
            "blaChat"
        );


    const input =
        document.getElementById(
            "blaInput"
        );


    /* =====================
       WELCOME
    ===================== */

    addMessage(

        chat,

        "Hi! 👋 I'm BloodLink Assistant. I can answer blood-donation questions, wellbeing questions, and questions about your BloodLink dashboard.",

        "bot"

    );


    /* =====================
       QUICK QUESTIONS
    ===================== */

    const QUICK = [

        "Why should I donate blood?",

        "Which blood group can I donate to?",

        "Does donating blood cause iron loss?",

        "Am I eligible to donate?",

        "What is burnout?",

        "How do I deal with anxiety?",

        "What are my notifications?",

        "What is my blood group?",

        "What is my current status?"

    ];


    const quick =
        document.getElementById(
            "blaQuick"
        );


    QUICK.forEach(
        question => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "bla-chip";


            button.textContent =
                question;


            button.onclick =
                () => {

                    sendMessage(
                        question
                    );

                };


            quick.appendChild(
                button
            );

        }
    );


    /* =====================
       SEND MESSAGE
    ===================== */

    function sendMessage(
        question
    ){

        question =
            question.trim();


        if(!question){

            return;

        }


        addMessage(
            chat,
            question,
            "user"
        );


        /*
         * FIRST:
         * Check personal BloodLink data.
         */

        let resultText =
            dashboardAnswer(
                question
            );


        /*
         * SECOND:
         * Check normal FAQ.
         */

        if(!resultText){

            const result =
                findAnswer(
                    question
                );


            if(result){

                resultText =
                    result.a;

            }

        }


        /*
         * FALLBACK
         */

        if(!resultText){

            resultText =
                "I can help with blood donation, blood groups, iron, eligibility, hospital stress, anxiety, burnout, grief, recovery and your personal BloodLink dashboard. Try asking something like \"What is my blood group?\" or \"How many matches do I have?\"";

        }


        setTimeout(
            () => {

                addMessage(
                    chat,
                    resultText,
                    "bot"
                );

            },
            150
        );


        input.value =
            "";

    }


    /* =====================
       OPEN
    ===================== */

    document
        .getElementById(
            "blaToggle"
        )
        .onclick =
        () => {

            panel.classList.toggle(
                "open"
            );


            if(
                panel.classList.contains(
                    "open"
                )
            ){

                input.focus();

            }

        };


    /* =====================
       CLOSE
    ===================== */

    document
        .getElementById(
            "blaClose"
        )
        .onclick =
        () => {

            panel.classList.remove(
                "open"
            );

        };


    /* =====================
       SEND BUTTON
    ===================== */

    document
        .getElementById(
            "blaSend"
        )
        .onclick =
        () => {

            sendMessage(
                input.value
            );

        };


    /* =====================
       ENTER KEY
    ===================== */

    input.addEventListener(
        "keydown",
        event => {

            if(
                event.key ===
                "Enter"
            ){

                event.preventDefault();

                sendMessage(
                    input.value
                );

            }

        }
    );

}


/* ============================================================
   START
============================================================ */

if(
    document.readyState ===
    "loading"
){

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

}
else{

    init();

}

})();