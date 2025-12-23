
import React from 'react';
import { CardType, Intensity, Difficulty } from './types';

export const CARD_STYLES = {
  [CardType.TRUTH]: {
    color: 'bg-emerald-500',
    icon: '💬',
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/50'
  },
  [CardType.DARE]: {
    color: 'bg-rose-500',
    icon: '⚡',
    gradient: 'from-rose-500 to-red-600',
    shadow: 'shadow-rose-500/50'
  },
  [CardType.SECRET]: {
    color: 'bg-sky-500',
    icon: '🤫',
    gradient: 'from-sky-500 to-blue-600',
    shadow: 'shadow-sky-500/50'
  },
  [CardType.CHAOS]: {
    color: 'bg-violet-500',
    icon: '🌀',
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/50'
  }
};

export const TRANSLATIONS = {
  en: {
    title: "SPIN & REVEAL",
    intensity: "Intensity",
    mode: "Mode",
    letsSpin: "LET'S SPIN!",
    tapToSpin: "TAP TO SPIN",
    spinning: "SPINNING...",
    chooseChallenge: "Choose Your Challenge",
    done: "Done",
    iAmAlone: "I'm Ready",
    privateMission: "Private Mission",
    secretMission: "SECRET MISSION",
    passPhone: "Pass the phone to",
    lookAway: "Everyone else, look away!",
    tapReveal: "Tap to reveal your destiny",
    resetPlayers: "← Reset Players",
    settings: "Settings",
    darkMode: "Dark Mode",
    bgMusic: "Background Music",
    difficulty: "Challenge Difficulty",
    language: "Language",
    gameRules: "Game Rules",
    backToGame: "BACK TO GAME",
    rules: [
      "Players take turns spinning the wheel.",
      "The selected player chooses a card category.",
      "Secret cards are for that player's eyes only!",
      "Chaos cards affect the entire group.",
      "Respect boundaries – have fun!"
    ],
    categories: {
      [CardType.TRUTH]: "Truth",
      [CardType.DARE]: "Dare",
      [CardType.SECRET]: "Secret",
      [CardType.CHAOS]: "Chaos"
    }
  },
  ar: {
    title: "لف واكشف",
    intensity: "الحدة",
    mode: "الوضع",
    letsSpin: "لنلف العجلة!",
    tapToSpin: "اضغط للف العجلة",
    spinning: "جاري اللف...",
    chooseChallenge: "اختر تحديك",
    done: "تم",
    iAmAlone: "أنا مستعد",
    privateMission: "مهمة خاصة",
    secretMission: "مهمة سرية",
    passPhone: "مرر الهاتف إلى",
    lookAway: "الجميع، انظروا بعيداً!",
    tapReveal: "اضغط لكشف مصيرك",
    resetPlayers: "← إعادة تعيين اللاعبين",
    settings: "الإعدادات",
    darkMode: "الوضع الليلي",
    bgMusic: "الموسيقى الخلفية",
    difficulty: "صعوبة التحدي",
    language: "اللغة",
    gameRules: "قوانين اللعبة",
    backToGame: "العودة للعبة",
    rules: [
      "يتناوب اللاعبون على لف العجلة.",
      "اللاعب المختار يختار فئة البطاقة.",
      "البطاقات السرية لعيون هذا اللاعب فقط!",
      "بطاقات الفوضى تؤثر على المجموعة بأكملها.",
      "احترم الحدود – استمتع!"
    ],
    categories: {
      [CardType.TRUTH]: "صراحة",
      [CardType.DARE]: "تحدي",
      [CardType.SECRET]: "سر",
      [CardType.CHAOS]: "فوضى"
    }
  },
  fr: {
    title: "SPIN & REVELATION",
    intensity: "Intensité",
    mode: "Mode",
    letsSpin: "C'EST PARTI !",
    tapToSpin: "TAPPER POUR TOURNER",
    spinning: "ÇÀ TOURNE...",
    chooseChallenge: "Choisissez Votre Défi",
    done: "Terminé",
    iAmAlone: "Je suis prêt(e)",
    privateMission: "Mission Privée",
    secretMission: "MISSION SECRÈTE",
    passPhone: "Passez le téléphone à",
    lookAway: "Tout le monde, regardez ailleurs !",
    tapReveal: "Tappez pour révéler votre destin",
    resetPlayers: "← Réinitialiser",
    settings: "Paramètres",
    darkMode: "Mode Sombre",
    bgMusic: "Musique de Fond",
    difficulty: "Difficulté",
    language: "Langue",
    gameRules: "Règles du Jeu",
    backToGame: "RETOUR AU JEU",
    rules: [
      "Tournez la roue chacun votre tour.",
      "Le joueur sélectionné choisit une catégorie.",
      "Les cartes Secrètes sont privées !",
      "Les cartes Chaos affectent tout le groupe.",
      "Amusez-vous !"
    ],
    categories: {
      [CardType.TRUTH]: "Vérité",
      [CardType.DARE]: "Action",
      [CardType.SECRET]: "Secret",
      [CardType.CHAOS]: "Chaos"
    }
  }
};

export const FALLBACK_CARDS = {
  en: {
    [Difficulty.EASY]: {
      [Intensity.CASUAL]: {
        [CardType.TRUTH]: [
          "What is your favorite thing about yourself?",
          "What is your biggest fear?",
          "Who do you trust the most in this room?",
          "What habit do you want to change?",
          "What makes you truly happy?",
          "Have you ever lied to avoid trouble?",
          "What is your biggest dream?",
          "What annoys you the most about people?",
          "Are you more emotional or logical?",
          "What is something people don’t know about you?"
        ],
        [CardType.DARE]: [
          "Smile without stopping for 20 seconds 🙂",
          "Imitate an animal of your choice 🐒",
          "Talk like a robot for one round 🤖",
          "Clap for yourself dramatically",
          "Say three positive things about yourself",
          "Switch seats with someone",
          "Tell a bad joke",
          "Walk like a model for 10 seconds",
          "Say the alphabet backwards",
          "Close your eyes and count to 15"
        ],
        [CardType.SECRET]: [
          "Try to get someone to give you a high-five without asking for one.",
          "Mention a made-up celebrity and see if anyone pretends to know them.",
          "Every time you drink, you must use your non-dominant hand.",
          "Pick a 'word of the round' and use it in every sentence for 5 mins.",
          "Try to get someone to apologize for something they didn't do.",
          "Hum a popular song quietly until someone identifies it.",
          "For the next 5 minutes, agree with everything the person to your left says.",
          "Try to get someone to tell you a joke without asking them directly.",
          "Adjust your seating position every 2 minutes naturally.",
          "Refer to someone by the wrong name until they correct you.",
          "Try to start a 'wave' or a group clap subtly.",
          "Hide one small object from the room and wait for someone to notice.",
          "Try to get someone to check their phone by acting like you heard a notification.",
          "Compliment everyone's shoes at least once subtly.",
          "Mention 'the weather' at least three times in normal conversation.",
          "Mirror the posture of the person sitting across from you for 3 minutes.",
          "Try to get the group to stand up for no reason by standing up yourself.",
          "Use a fake accent for the next 5 sentences you say.",
          "Try to get someone to show you a photo on their phone.",
          "Sneeze at least twice in the next 10 minutes convincingly.",
          "Try to get someone to offer you a piece of food.",
          "Say 'interesting' after everything anyone says for 2 minutes.",
          "Try to get someone to yawn by yawning yourself.",
          "Stare at the ceiling until someone else looks up too.",
          "Try to get someone to ask you what time it is.",
          "Whistle a tune until someone joins in or asks you to stop.",
          "Try to lead a 5-second total silence in the group.",
          "Use a word that clearly doesn't fit in a sentence and act natural.",
          "Try to get someone to touch their own hair.",
          "Wink at the person across from you every time they speak."
        ],
        [CardType.CHAOS]: [
          "The Whisper Round: Everyone must whisper for the next 5 minutes.",
          "Everyone moves two seats to the right!",
          "The Echo: Everyone must repeat the last word of every sentence they say.",
          "No Names: For 3 minutes, if you say anyone's name, you lose your next turn.",
          "Thumbs Up: The last person to give a thumbs up has to sing a song.",
          "The Statue: When the current player freezes, everyone must freeze. Last one loses.",
          "Song Association: Name a word; everyone must sing a line containing it.",
          "Double Trouble: The next player must complete two cards instead of one.",
          "Phone Stack: Everyone puts their phone in a pile; first to touch theirs loses.",
          "Rhyme Time: Everyone must speak in rhymes for the next 2 minutes.",
          "Left is Right: Everyone must use their left hand for everything for 10 minutes.",
          "Group Selfie: Take a funny group photo right now!",
          "Floor is Lava: Everyone must get their feet off the floor for 30 seconds.",
          "Reverse Order: The game now proceeds in the opposite direction.",
          "The Compliment Circle: Everyone says one nice thing about the person to their left.",
          "Animal Kingdom: Everyone must make an animal sound before speaking for one round.",
          "Mirror Mode: Everyone must mimic the player currently speaking.",
          "No 'Yes' or 'No': Anyone who says 'yes' or 'no' for 5 minutes does 5 pushups.",
          "The Jester: The current player has 30s to make someone laugh; if they succeed, they win.",
          "Slow Motion: Everyone must move in slow motion for 2 minutes.",
          "Accent Swap: Everyone must try to speak in a foreign accent for the next round.",
          "Categories: Pick a category (e.g. Fruits); first to fail names doing a dare.",
          "Freeze Frame: Everyone stays in their current position until the wheel is spun again.",
          "Staring Contest: Everyone find a partner; last one to blink wins a 'Skip a Dare' pass.",
          "Dance Break: Everyone must dance for 30 seconds to no music."
        ]
      },
      [Intensity.BOLD]: {
        [CardType.TRUTH]: [
          "Have you ever liked someone you shouldn’t have?",
          "Who was the last person you thought about before sleeping?",
          "Have you ever hidden your feelings for someone?",
          "What attracts you first in a person?",
          "Have you ever been jealous but pretended not to be?",
          "Do you fall in love easily?",
          "What is the most embarrassing thing in your search history?",
          "Are you afraid of commitment?",
          "Have you ever missed someone but never told them?",
          "What kind of attention do you like the most?"
        ],
        [CardType.DARE]: [
          "Look into someone’s eyes for 30 seconds without talking",
          "Whisper a small secret to the person on your right",
          "Compliment someone in the room honestly and intensely",
          "Let someone choose your next truth",
          "Send a 😏 emoji to a random contact",
          "Describe your crush in three words",
          "Share a vulnerable memory",
          "Let the group ask you one bold question",
          "Sit closer to someone of your choice",
          "Say something you usually keep to yourself"
        ],
        [CardType.SECRET]: [
          "Subtly mimic the movements of the person to your left for 5 minutes.",
          "Try to convince the group of a fake 'fact' about your past.",
          "Pick a secret 'rival' and disagree with their points for 5 mins.",
          "Try to get someone to confess a secret to you without asking.",
          "Keep your eyes closed for 1 minute while listening to a conversation.",
          "Try to get someone to swap drinks with you.",
          "Touch your nose every time someone laughs.",
          "Cough every time someone mentions a specific common word.",
          "Try to get the person next to you to fix your hair.",
          "Speak slightly quieter and quieter until someone asks you to speak up."
        ],
        [CardType.CHAOS]: [
          "Swap phones with the person to your right for one round.",
          "Everyone must reveal their last 3 Google searches.",
          "Everyone must describe their first crush in detail.",
          "The Secret Keeper: One person writes a word; everyone must guess it by asking only yes/no.",
          "Truth or Dare Swap: All Truths become Dares and vice versa for one round.",
          "Double Intensity: All current rules are doubled in duration.",
          "Eye Contact Round: Everyone must look at someone else while speaking.",
          "The Silent Treatment: Nobody can speak until someone spins the wheel.",
          "The Butler: Everyone must be served by the current player for 5 mins.",
          "The Interview: One player is grilled by everyone for 2 minutes."
        ]
      },
      [Intensity.EXTREME]: {
        [CardType.TRUTH]: [
          "Have you ever broken someone’s heart unintentionally?",
          "Is there someone you still think about even though it’s over?",
          "Have you ever stayed in a relationship out of comfort?",
          "Do you prefer emotional closeness or independence?",
          "Have you ever crossed your own boundaries for someone?",
          "What is your biggest emotional weakness?",
          "Have you ever desired someone unexpectedly?",
          "What is the most rebellious thing you've ever done?",
          "What is a secret you’ve never shared with anyone here?",
          "What scares you the most about intimacy?"
        ],
        [CardType.DARE]: [
          "Admit something you’ve never said out loud",
          "Tell someone why people might be attracted to them",
          "Read your last private message (omit names if needed)",
          "Let the group decide: a Truth or a Dare for you",
          "Say one honest thing about how you feel right now",
          "Describe your relationship style in one sentence",
          "Switch places with someone you feel a spark with",
          "Share a fear related to your future",
          "Say one thing you want but are afraid to ask for",
          "Let someone ask you a very bold, unfiltered question"
        ],
        [CardType.SECRET]: [
          "Spend the next 10 minutes acting slightly more offended than usual.",
          "Subtly move one item belonging to someone else every few minutes.",
          "Try to make someone feel guilty for a minor action they took.",
          "Lick your lips every time someone says 'the' for 5 minutes.",
          "Try to get someone to hold your hand for 10 seconds.",
          "Pick someone to be your 'leader' and follow their every movement.",
          "Try to get everyone to be silent for 10 seconds through gestures.",
          "Try to get someone to say your name 3 times.",
          "Speak in the third person for the next 10 minutes.",
          "Try to get someone to feed you a piece of food."
        ],
        [CardType.CHAOS]: [
          "Total Dark: Turn off all lights for one full turn of the wheel.",
          "Phone Roulette: Everyone hands their phone to the person on their left.",
          "The Hot Seat: Everyone gets to ask the current player one extreme question.",
          "Identity Theft: Everyone must act like the person to their right.",
          "The Confession: Everyone must share one thing they regret.",
          "Boundary Break: Everyone must reveal one thing they are usually private about.",
          "The Sacrifice: One person must take a dare for the whole group.",
          "Truth Train: Everyone must answer the same extreme truth question.",
          "Extreme Dare: The group invents a dare for the current player.",
          "The Reset: End all current rules and start a new intensity level."
        ]
      }
    },
    [Difficulty.HARD]: {
      [Intensity.CASUAL]: {
        [CardType.TRUTH]: ["What's your most expensive mistake?", "Who do you resent the most?", "What is your biggest regret?", "What lie have you told that you still maintain?"],
        [CardType.DARE]: ["Do 20 pushups.", "Post a selfie with a funny face.", "Call a random contact and sing 'Happy Birthday'.", "Let someone draw on your face with a washable marker."],
        [CardType.SECRET]: ["Keep a straight face for 2 minutes no matter what.", "Try to get someone to tell you a secret without asking.", "Hide someone's phone and don't tell them for 5 mins."],
        [CardType.CHAOS]: ["Everyone speaks in rhymes for 2 turns.", "Everyone must stand up whenever the player speaks.", "No one can use their thumbs for the next 10 minutes."]
      },
      [Intensity.BOLD]: {
        [CardType.TRUTH]: ["Who is the most overrated person in this room?", "What is your most controversial opinion?", "What is your most toxic trait?"],
        [CardType.DARE]: ["Let someone post a random emoji on your social story.", "Let someone read your last 5 texts.", "Call your ex and say 'I miss you' (just kidding, but say 'Hi')."],
        [CardType.SECRET]: ["Pretend you don't know who anyone is for 2 minutes.", "Try to get someone to ask you for a favor.", "Don't blink for as long as possible while someone talks to you."],
        [CardType.CHAOS]: ["Everyone must reveal their bank balance (optional but bold).", "Everyone must swap one item of clothing with someone else.", "Everyone must share their most embarrassing dating story."]
      },
      [Intensity.EXTREME]: {
        [CardType.TRUTH]: ["What is your biggest secret obsession?", "What is the most illegal thing you've ever done?", "Who here would you most likely kiss?"],
        [CardType.DARE]: ["Let someone look at your browser history for 30 seconds.", "Let someone call anyone from your contacts for 10 seconds.", "Eat a spoonful of a condiment of the group's choice."],
        [CardType.SECRET]: ["Confess one thing you've stolen.", "Try to get someone to tell you they love you (platonic or not).", "Act like you are having a heated argument with an imaginary person."],
        [CardType.CHAOS]: ["Swap all players' drinks.", "Everyone must answer one question from their most recent DM.", "Everyone must do 10 burpees right now."]
      }
    }
  },
  ar: {
    [Difficulty.EASY]: {
      [Intensity.CASUAL]: {
        [CardType.TRUTH]: [
          "ما هو أكثر شيء تحبه في نفسك؟",
          "ما هو أكبر مخاوفك؟",
          "من هو أكثر شخص تثق به في هذه الغرفة؟",
          "ما هي العادة التي ترغب في تغييرها؟",
          "ما الذي يجعلك سعيداً حقاً؟",
          "هل كذبت يوماً لتتجنب الوقوع في مشكلة؟",
          "ما هو أكبر حلم لك؟",
          "ما هو أكثر شيء يزعجك في الناس؟",
          "هل أنت شخص عاطفي أم منطقي أكثر؟",
          "ما هو الشيء الذي لا يعرفه الناس عنك؟"
        ],
        [CardType.DARE]: [
          "ابتسم لمدة 20 ثانية دون توقف 🙂",
          "قلد حيواناً من اختيارك 🐒",
          "تحدث كآلي (روبوت) لجولة واحدة 🤖",
          "صفق لنفسك بحرارة وبشكل درامي",
          "قل ثلاثة أشياء إيجابية عن نفسك",
          "بدل مقعدك مع شخص آخر",
          "قل نكتة سخيفة",
          "امشِ كعارض أزياء لمدة 10 ثوانٍ",
          "قل الحروف الأبجدية بالعكس",
          "أغمض عينيك وعد إلى 15"
        ],
        [CardType.SECRET]: [
          "حاول الحصول على 'هاي فايف' من شخص ما دون طلبها مباشرة.",
          "اذكر اسم مشهور وهمي وانظر من سيتظاهر بمعرفته.",
          "في كل مرة تشرب، يجب أن تستخدم يدك غير المهيمنة.",
          "اختر 'كلمة الجولة' واستخدمها في كل جملة لمدة 5 دقائق.",
          "حاول جعل شخص ما يعتذر عن شيء لم يفعله.",
          "دندن أغنية مشهورة بهدوء حتى يتعرف عليها أحد.",
          "لمدة 5 دقائق، وافق على كل ما يقوله الشخص الذي على يسارك.",
          "حاول جعل شخص ما يخبرك بنكتة دون طلبها مباشرة.",
          "غير وضعية جلوسك كل دقيقتين بشكل طبيعي.",
          "نادِ شخصاً باسم خاطئ حتى يصحح لك.",
          "حاول بدء 'موجة' أو تصفيق جماعي بذكاء.",
          "خبئ شيئاً صغيراً من الغرفة وانتظر حتى يلاحظ أحد.",
          "حاول جعل شخص ما يتفقد هاتفه بالتظاهر بسماع إشعار.",
          "امدح أحذية الجميع مرة واحدة على الأقل بذكاء.",
          "تحدث عن 'الطقس' ثلاث مرات على الأقل في حوار طبيعي.",
          "قلد وضعية جلوس الشخص المقابل لك لمدة 3 دقائق.",
          "حاول جعل المجموعة تقف بدون سبب بالوقوف بنفسك.",
          "استخدم لهجة مزيفة في الجمل الخمس القادمة.",
          "حاول جعل شخص ما يريك صورة على هاتفه.",
          "اعطس مرتين على الأقل في الـ 10 دقائق القادمة بشكل مقنع.",
          "حاول جعل شخص ما يقدم لك قطعة من الطعام.",
          "قل 'مثير للاهتمام' بعد كل ما يقوله أي شخص لمدة دقيقتين.",
          "حاول جعل شخص ما يتثاءب عن طريق التثاؤب بنفسك.",
          "انظر إلى السقف حتى ينظر شخص آخر معك.",
          "حاول جعل شخص ما يسألك كم الساعة.",
          "صفر لحناً حتى ينضم إليك أحد أو يطلب منك التوقف.",
          "حاول قيادة صمت تام لمدة 5 ثوانٍ في المجموعة.",
          "استخدم كلمة لا تناسب الجملة وتصرف بشكل طبيعي.",
          "حاول جعل شخص ما يلمس شعره.",
          "اغمز للشخص المقابل لك في كل مرة يتحدث فيها."
        ],
        [CardType.CHAOS]: [
          "جولة الهمس: يجب على الجميع الهمس لمدة 5 دقائق القادمة.",
          "على الجميع الانتقال مقعدين إلى اليمين!",
          "الصدى: يجب على الجميع تكرار الكلمة الأخيرة من كل جملة يقولونها.",
          "بدون أسماء: لمدة 3 دقائق، إذا ذكرت اسم أي شخص، تفقد دورك القادم.",
          "إبهام للأعلى: آخر شخص يرفع إبهامه عليه غناء أغنية.",
          "تمثال: عندما يتجمد اللاعب الحالي، يجب على الجميع التجمد. الآخر يخسر.",
          "ارتباط الأغاني: اذكر كلمة، وعلى الجميع غناء سطر يحتوي عليها.",
          "مضاعفة التحدي: يجب على اللاعب القادم إكمال بطاقتين بدلاً من واحدة.",
          "كومة الهواتف: يضع الجميع هواتفهم في كومة، أول من يلمس هاتفه يخسر.",
          "وقت القافية: يجب على الجميع التحدث بالقوافي لمدة دقيقتين.",
          "اليسار هو اليمين: يجب على الجميع استخدام يدهم اليسرى لكل شيء لمدة 10 دقائق.",
          "سيلفي جماعي: التقطوا صورة جماعية مضحكة الآن!",
          "الأرض هي حمم بركانية: على الجميع رفع أقدامهم عن الأرض لمدة 30 ثانية.",
          "الترتيب العكسي: اللعبة الآن تسير في الاتجاه المعاكس.",
          "حلقة المديح: الجميع يقول شيئاً لطيفاً عن الشخص الذي على يساره.",
          "مملكة الحيوان: يجب على الجميع إصدار صوت حيوان قبل التحدث لجولة واحدة.",
          "وضع المرآة: يجب على الجميع تقليد اللاعب الذي يتحدث حالياً.",
          "لا 'نعم' أو 'لا': أي شخص يقول 'نعم' أو 'لا' لمدة 5 دقائق يقوم بـ 5 ضغطات.",
          "المهرج: اللاعب الحالي لديه 30 ثانية لجعل شخص يضحك؛ إذا نجح يفوز.",
          "الحركة البطيئة: يجب على الجميع التحرك ببطء لمدة دقيقتين.",
          "تبادل اللهجات: يجب على الجميع محاولة التحدث بلهجة أجنبية للجولة القادمة.",
          "الفئات: اختر فئة (مثلاً: فواكه)؛ أول من يفشل ينفذ تحدي.",
          "تجميد الإطار: يبقى الجميع في وضعيتهم الحالية حتى تلف العجلة مرة أخرى.",
          "تحدي المحدقة: كل شخص يجد شريكاً؛ آخر من يرمش يفوز ببطاقة 'تجاوز تحدي'.",
          "استراحة رقص: يجب على الجميع الرقص لمدة 30 ثانية بدون موسيقى."
        ]
      },
      [Intensity.BOLD]: {
        [CardType.TRUTH]: [
          "هل سبق لك أن أعجبت بشخص لم يكن يجب أن تعجب به؟",
          "من كان آخر شخص فكرت فيه قبل النوم؟",
          "هل سبق لك أن أخفيت مشاعرك تجاه شخص ما؟",
          "ما الذي يجذبك أولاً في الشخص؟",
          "هل سبق لك أن شعرت بالغيرة وتظاهرت بغير ذلك؟",
          "هل تقع في الحب بسهولة؟",
          "ما هو أكثر شيء محرج في سجل بحثك؟",
          "هل تخاف من الالتزام؟",
          "هل سبق لك أن افتقدت شخصاً ولم اخبره أبداً؟",
          "ما نوع الاهتمام الذي تفضله أكثر؟"
        ],
        [CardType.DARE]: [
          "انظر في عيني شخص ما لمدة 30 ثانية دون كلام",
          "اهمس بسر صغير للشخص الذي على يمينك",
          "امدح شخصاً في الغرفة بصدق وكثافة",
          "اجعل شخصاً ما يختار سؤال 'الصراحة' التالي لك",
          "أرسل إيموجي 😏 لجهة اتصال عشوائية",
          "صف الشخص المعجب به في ثلاث كلمات",
          "شارك ذكرى حساسة",
          "اجعل المجموعة تسألك سؤالاً واحداً جريئاً",
          "اجلس بالقرب من شخص من اختيارك",
          "قل شيئاً تحتفظ به عادة لنفسك"
        ],
        [CardType.SECRET]: [
          "قلد حركات الشخص الذي على يسارك بذكاء لمدة 5 دقائق.",
          "حاول إقناع المجموعة بحقيقة وهمية عن ماضيك.",
          "اختر 'منافساً' سرياً وخالفه في كل آرائه لمدة 5 دقائق.",
          "حاول جعل شخص ما يعترف لك بسر دون أن تطلب منه.",
          "أغمض عينيك لمدة دقيقة كاملة أثناء الاستماع للحوار.",
          "حاول جعل شخص ما يبدل مشروبه معك.",
          "المس أنفك في كل مرة يضحك فيها شخص ما.",
          "اسعل في كل مرة يذكر فيها شخص كلمة شائعة.",
          "حاول جعل الشخص المجاور لك يصلح لك شعرك.",
          "تحدث بصوت منخفض تدريجياً حتى يطلب منك أحدهم رفع صوتك."
        ],
        [CardType.CHAOS]: [
          "بدل هاتفك مع الشخص الذي على يمينك لجولة واحدة.",
          "على الجميع الكشف عن آخر 3 عمليات بحث في جوجل.",
          "على الجميع وصف أول قصة حب لهم بالتفصيل.",
          "حافظ السر: يكتب شخص كلمة وعلى الجميع تخمينها بأسئلة نعم/لا.",
          "تبادل صراحة وتحدي: كل الصراحة تصبح تحدي والعكس لجولة واحدة.",
          "مضاعفة الحدة: كل القواعد الحالية تضاعف مدتها.",
          "جولة التواصل البصري: يجب على الجميع النظر لشخص آخر أثناء التحدث.",
          "العلاج الصامت: لا أحد يتحدث حتى تلف العجلة مرة أخرى.",
          "الخادم: يجب على اللاعب الحالي خدمة الجميع لمدة 5 دقائق.",
          "المقابلة: لاعب واحد يتم استجوابه من قبل الجميع لمدة دقيقتين."
        ]
      }
    }
  }
};

export const INTENSITY_INFO = {
  [Intensity.CASUAL]: { label: 'Casual', emoji: '🧒', color: 'bg-blue-500' },
  [Intensity.BOLD]: { label: 'Bold', emoji: '😏', color: 'bg-orange-500' },
  [Intensity.EXTREME]: { label: 'Extreme', emoji: '🔥', color: 'bg-red-600' }
};

export const DIFFICULTY_INFO = {
  [Difficulty.EASY]: { label: 'Easy', emoji: '🟢', color: 'bg-green-500' },
  [Difficulty.HARD]: { label: 'Hard', emoji: '🔴', color: 'bg-red-500' }
};
