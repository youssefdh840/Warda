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
          "Who do you trust the most?",
          "What habit do you want to change?",
          "What makes you truly happy?",
          "Have you ever lied to avoid trouble?",
          "What is your biggest dream?",
          "What annoys you the most?",
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
          "Every time someone laughs, you must clear your throat.",
          "Try to get someone to say the word 'Actually'.",
          "Wink at the person across from you every 2 minutes."
        ],
        [CardType.CHAOS]: [
          "Everyone must switch seats with someone else.",
          "No one can use their phone for the rest of the game.",
          "Everyone must talk in a whisper for 3 minutes."
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
          "Have you ever regretted an emotional decision?",
          "Are you afraid of commitment or loneliness?",
          "Have you ever missed someone but never told them?",
          "What kind of attention do you like the most?"
        ],
        [CardType.DARE]: [
          "Look into someone’s eyes for 20 seconds without talking",
          "Whisper a small secret to someone you choose",
          "Compliment someone in the room honestly",
          "Let someone choose your next truth",
          "Send a 😏 emoji to a random contact",
          "Describe your personality in three words",
          "Share an emotional memory",
          "Let the group ask you one bold question",
          "Sit closer to someone of your choice",
          "Say something you usually keep to yourself"
        ],
        [CardType.SECRET]: [
          "Subtly mimic the movements of the person to your left.",
          "Try to convince the group you have a twin you never mentioned.",
          "Pick a secret 'rival' and disagree with everything they say for 5 mins."
        ],
        [CardType.CHAOS]: [
          "Swap phones with the person to your right for one round.",
          "Everyone must reveal their last 3 Google searches.",
          "Everyone must describe their first crush."
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
          "Do you like to take control or be drawn in?",
          "What is a secret you’ve never shared with anyone here?",
          "What scares you the most about intimacy?"
        ],
        [CardType.DARE]: [
          "Admit something you’ve never said out loud",
          "Tell someone why people might be attracted to them",
          "Read your last private message (no names)",
          "Let the group decide: Truth or Dare for you",
          "Say one honest thing about how you feel right now",
          "Describe your relationship style in one sentence",
          "Switch places with someone you feel comfortable with",
          "Share a fear related to relationships",
          "Say one thing you want but are afraid to ask for",
          "Let someone ask you a very bold question"
        ],
        [CardType.SECRET]: [
          "Try to get someone to confess a secret to you without asking.",
          "Spend the next 10 minutes acting slightly more offended than usual.",
          "Subtly move one item belonging to someone else every few minutes."
        ],
        [CardType.CHAOS]: [
          "The Floor is Lava! Everyone stay off the floor for 60 seconds.",
          "Reverse the game order and double the intensity.",
          "Total Dark: Turn off all lights for one full turn."
        ]
      }
    },
    [Difficulty.HARD]: {
      [Intensity.CASUAL]: { [CardType.TRUTH]: ["What's your most expensive mistake?"], [CardType.DARE]: ["Do 20 pushups."], [CardType.SECRET]: ["Keep a straight face for 2 minutes."], [CardType.CHAOS]: ["Everyone speaks in rhymes for 2 turns."] },
      [Intensity.BOLD]: { [CardType.TRUTH]: ["Who is the most overrated person here?"], [CardType.DARE]: ["Let someone post a random emoji on your social story."], [CardType.SECRET]: ["Pretend you don't know who anyone is for 2 minutes."], [CardType.CHAOS]: ["Everyone must stand up whenever the player speaks."] },
      [Intensity.EXTREME]: { [CardType.TRUTH]: ["What is your biggest secret obsession?"], [CardType.DARE]: ["Let someone look at your browser history for 30 seconds."], [CardType.SECRET]: ["Confess one thing you've stolen."], [CardType.CHAOS]: ["Swap all players' drinks."] }
    }
  },
  ar: {
    [Difficulty.EASY]: {
      [Intensity.CASUAL]: {
        [CardType.TRUTH]: [
          "ما هو أكثر شيء تحبه في نفسك؟",
          "ما هو أكبر مخاوفك؟",
          "من هو الشخص الذي تثق به أكثر من غيره؟",
          "ما هي العادة التي ترغب في تغييرها؟",
          "ما الذي يجعلك سعيداً حقاً؟",
          "هل كذبت يوماً لتتجنب الوقوع في مشكلة؟",
          "ما هو أكبر حلم لك؟",
          "ما هو أكثر شيء يزعجك؟",
          "هل أنت شخص عاطفي أم منطقي أكثر؟",
          "ما هو الشيء الذي لا يعرفه الناس عنك؟"
        ],
        [CardType.DARE]: [
          "ابتسم لمدة 20 ثانية دون توقف 🙂",
          "قلد حيواناً من اختيارك 🐒",
          "تحدث كآلي (روبوت) لجولة واحدة 🤖",
          "صفق لنفسك بحرارة",
          "قل ثلاثة أشياء إيجابية عن نفسك",
          "بدل مقعدك مع شخص آخر",
          "قل نكتة سخيفة",
          "امشِ كعارض أزياء لمدة 10 ثوانٍ",
          "قل الحروف الأبجدية بالعكس",
          "أغمض عينيك وعد إلى 15"
        ],
        [CardType.SECRET]: ["اغمز للشخص المقابل لك كل دقيقتين."],
        [CardType.CHAOS]: ["الجميع يبدل مقاعده مع شخص آخر فوراً."]
      },
      [Intensity.BOLD]: {
        [CardType.TRUTH]: [
          "هل سبق لك أن أعجبت بشخص لم يكن يجب أن تعجب به؟",
          "من كان آخر شخص فكرت فيه قبل النوم؟",
          "هل سبق لك أن أخفيت مشاعرك تجاه شخص ما؟",
          "ما الذي يجذبك أولاً في الشخص؟",
          "هل سبق لك أن شعرت بالغيرة وتظاهرت بغير ذلك؟",
          "هل تقع في الحب بسهولة؟",
          "هل سبق لك أن ندمت على قرار عاطفي؟",
          "هل تخاف من الالتزام أم من الوحدة؟",
          "هل سبق لك أن افتقدت شخصاً ولم تخبره أبداً؟",
          "ما نوع الاهتمام الذي تفضله أكثر؟"
        ],
        [CardType.DARE]: [
          "انظر في عيني شخص ما لمدة 20 ثانية دون كلام",
          "اهمس بسر صغير لشخص تختاره",
          "امدح شخصاً في الغرفة بصدق",
          "اجعل شخصاً ما يختار سؤال 'الصراحة' التالي لك",
          "أرسل إيموجي 😏 لجهة اتصال عشوائية",
          "صف شخصيتك في ثلاث كلمات",
          "شارك ذكرى عاطفية",
          "اجعل المجموعة تسألك سؤالاً واحداً جريئاً",
          "اجلس بالقرب من شخص من اختيارك",
          "قل شيئاً تحتفظ به عادة لنفسك"
        ],
        [CardType.SECRET]: ["قلد حركات الشخص الذي على يسارك دون أن يلاحظ."],
        [CardType.CHAOS]: ["بدل هاتفك مع الشخص الذي على يمينك لجولة واحدة."]
      },
      [Intensity.EXTREME]: {
        [CardType.TRUTH]: [
          "هل سبق لك أن كسرت قلب شخص ما دون قصد؟",
          "هل هناك شخص لا تزال تفكر فيه رغم انتهاء العلاقة؟",
          "هل سبق لك أن بقيت في علاقة فقط من أجل الراحة؟",
          "هل تفضل القرب العاطفي أم الاستقلال؟",
          "هل سبق لك أن تجاوزت حدودك الخاصة من أجل شخص ما؟",
          "ما هي أكبر نقاط ضعفك العاطفية؟",
          "هل سبق لك أن شعرت برغبة تجاه شخص ما بشكل غير متوقع؟",
          "هل تحب التحكم أم تحب أن تكون تابعاً؟",
          "ما هو السر الذي لم تشاركه أبداً مع أي شخص هنا؟",
          "ما هو أكثر شيء يخيفك في العلاقة الحميمة؟"
        ],
        [CardType.DARE]: [
          "اعترف بشيء لم تقله بصوت عالٍ من قبل",
          "أخبر شخصاً ما لماذا قد ينجذب الناس إليه",
          "اقرأ آخر رسالة خاصة لك (بدون ذكر أسماء)",
          "اجعل المجموعة تقرر: صراحة أم تحدي لك",
          "قل شيئاً صادقاً واحداً حول ما تشعر به الآن",
          "صف أسلوبك في العلاقات في جملة واحدة",
          "بدل مكانك مع شخص تشعر معه بالراحة",
          "شارك خوفاً متعلقاً بالعلاقات",
          "قل شيئاً واحداً تريده ولكنك تخشى أن تطلبه",
          "اجعل شخصاً ما يسألك سؤالاً جريئاً جداً"
        ],
        [CardType.SECRET]: ["حاول جعل شخص ما يعترف لك بسر دون أن تطلب منه."],
        [CardType.CHAOS]: ["اعكس ترتيب الأدوار وقم بمضاعفة الحماس!"]
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
