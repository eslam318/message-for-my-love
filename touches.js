
function checkPassword() {
    // 1. هنجيب الكلمة اللي المستخدم كتبها في المربع
    const userInput = document.getElementById("passwordInput").value;
    
    // 2. الباسورد الصح (تقدري تغيريه براحتك)
    const correctPassword = "8102009"; 
    
    // 3. التحقق
    if (userInput === correctPassword) {
        // لو صح، انقله لصفحة الموقع الرئيسية
        window.location.href = "home.html"; 
    } else {
        // لو غلط، اظهر رسالة خطأ
        document.getElementById("errorMessage").innerText = "كلمة السر غلط، حاولي تاني! 😢";
    }
}

const messageText = "بطتي يبطتي انا عملت الحاجة دي عشان كانت في دماغي بقالها فترة كبيرة اوي يمكن هي مش حلوة اوي بس يعني دا ال انا عرفت اعملو بجد انا بحبك اوي اوي ومقدرش استغنى عنك بجد انتي كل حاجة في حياتي وعايز اقولك متزعليش مني وحقك عليا انا فعلا اذيتك كتير اوي ويمكن اكون خسرت ثقتك فيا وال انا فهمتو انك تقريبا مستحيل تثقي فيا تاني بس انا بحاول يعني هفضل احاول لغاية ما انتي تقوليلي خلاص انك مش عايزة بس عمتا انا عاين اقولم اني بحبك اوي اوي وبعشقك كمان وبحب فيكي كل حاجة من اول عيونك ال زي ال قمر دي لغاية حضنك الدافي ال انا بتمنى ان ربنا ميحرمنيش منو ابدا انا مهما اتكلمت بجد مش هعرف اوصلك انتي غالية عندي قد اي او انا بتقطع ازاي من الكلام ال انتي بتقولية وبيموتني ازاي بس انا هفضل معاكي وجنبك برضو مش هسيبك حتى لو مش عايزاني هحاول برضو انا بحبك اوي اوي بجد وربنا يخليكي ليا وميحرمنيش منك ابدا ابدا ونفسي اقابلك عشان اخدك في حضني بجد عشان انتي وحشاني اوي اوي وانا بخاف عليكي اوي اوي يمكن احون مش كويس وانا بكتب الكلام دا لان غالبا انتي تعبانة بس ان شاء الله يبقى مفيش حاجة ويرب اي حاجة وحشة تبعد عنك وتجيلي انا هفضل اقولها علي طول لغاية  ما تتحقق وبحبك اويييي امووووووواه 😘"; 
let index = 0;
const speed = 100; 

function typeWriter() {
    const typedMessageElement = document.getElementById("typedMessage");
    if (typedMessageElement && index < messageText.length) {
        typedMessageElement.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
    
    // محاولة ذكية لتشغيل الصوت رغماً عن قيود المتصفح
    const audio = document.getElementById("bgAudio");
    if (audio) {
        // محاولة أولى
        audio.play().catch(error => {
            console.log("المتصفح يمنع التشغيل التلقائي بدون تفاعل.");
            
            // الحل المضمون: الأغنية تشتغل فوراً أول ما تلمسي أو تضغطي في أي مكان في الصفحة
            const startAudio = () => {
                audio.play();
                document.removeEventListener('click', startAudio);
                document.removeEventListener('touchstart', startAudio);
            };
            document.addEventListener('click', startAudio);
            document.addEventListener('touchstart', startAudio);
        });
    }
};