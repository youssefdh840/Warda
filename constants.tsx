import React from 'react';
import { CardType, Intensity, Difficulty } from './types';

export const CARD_STYLES = {
  [CardType.TRUTH]: {
    color: 'bg-emerald-500',
    icon: '💬',
    gradient: 'from-emerald-600 to-teal-700',
    shadow: 'shadow-emerald-500/50'
  },
  [CardType.DARE]: {
    color: 'bg-rose-500',
    icon: '⚡',
    gradient: 'from-rose-600 to-red-700',
    shadow: 'shadow-rose-500/50'
  },
  [CardType.SECRET]: {
    color: 'bg-sky-500',
    icon: '🤫',
    gradient: 'from-sky-600 to-blue-700',
    shadow: 'shadow-sky-500/50'
  },
  [CardType.CHAOS]: {
    color: 'bg-violet-500',
    icon: '🌀',
    gradient: 'from-violet-600 to-purple-700',
    shadow: 'shadow-violet-500/50'
  }
};

export const FALLBACK_CARDS = {
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
        "What is something people don’t know about you?",
        "What is your favorite childhood memory?",
        "Which fictional character would you like to meet?",
        "If you could have one superpower, what would it be?",
        "What's your favorite comfort food?"
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
        "Close your eyes and count to 15",
        "Give the person to your left a high-five.",
        "Sing the chorus of your favorite song.",
        "Try to lick your elbow."
      ],
      [CardType.SECRET]: [
        "Quietly hum a song until someone guesses it.",
        "Wink at the person to your right every time they laugh.",
        "Try to use the word 'Banana' in three different sentences.",
        "Don't show your teeth when you laugh for the next two rounds.",
        "Touch your nose whenever the person to your left speaks.",
        "Subtly mimic the hand gestures of the person to your left."
      ],
      [CardType.CHAOS]: [
        "Everyone switch seats with someone else.",
        "No one can say 'Yes' or 'No' for the next round.",
        "Everyone must speak in a whisper until the next Truth card.",
        "The next player must bark like a dog before their turn.",
        "The Floor is Lava: Everyone must keep their feet off the floor for 30 seconds.",
        "Reverse the turn order starting now.",
        "Everyone must keep their left hand on their right shoulder whenever they are not speaking for 5 minutes.",
        "No one can use contractions (can't, won't, etc.) for the next full round.",
        "Everyone must speak like they are underwater for 2 minutes.",
        "The next player must perform their turn while standing on one leg.",
        "Swap one shoe with the person on your right for the next 10 minutes.",
        "Everyone must end every sentence with 'Your Majesty' for the next round.",
        "No one is allowed to use any player's real name for the next 5 minutes. Use nicknames only!"
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
        "What kind of attention do you like the most?",
        "What's the most childish thing you still do?",
        "What song is your 'guilty pleasure'?"
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
        "Say something you usually keep to yourself",
        "Call a random contact and tell them a bad joke.",
        "Let someone style your hair for the next 10 minutes."
      ],
      [CardType.SECRET]: [
        "Try to get someone to say 'Potato' without asking directly.",
        "Cough every time the person to your right says a vowel.",
        "Try to make someone laugh without touching them or talking.",
        "Every time you speak, you must touch your chin first.",
        "Subtly move someone's drink further away every time they look away.",
        "Act like you are incredibly bored for the next 3 minutes."
      ],
      [CardType.CHAOS]: [
        "Everyone must speak with an accent of the current player's choice.",
        "Swap one item of clothing (hat, watch, jacket) with someone else.",
        "Anyone who touches their phone in the next 10 mins must do a dare.",
        "Everyone must give a sincere compliment to the person to their left.",
        "The person with the shortest hair picks the next category for everyone.",
        "The 'Freeze Frame' Rule: Whenever the current player says 'FREEZE', everyone must stop moving until they say 'MELT'.",
        "Everyone must narrate their own actions like a dramatic sportscaster for 5 minutes.",
        "The 'Forbidden Word': The group picks a common word (e.g., 'the', 'is'). Anyone who says it must do 5 jumping jacks.",
        "The 'Reflection' Rule: Everyone must mirror the person sitting across from them for the next round.",
        "The 'High Stakes' Rule: The next Truth card must be answered by everyone in the circle.",
        "Everyone must trade phones (locked) with the person to their right for 10 minutes.",
        "No one can use their hands to gesture while speaking for the next 5 minutes."
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
        "What scares you the most about intimacy?",
        "Who here would you trust with your life?",
        "If you could trade lives with someone in this room, who would it be?"
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
        "Let someone ask you a very bold question",
        "Let someone post a random emoji on your social media.",
        "Exchange socks with the person to your right."
      ],
      [CardType.SECRET]: [
        "Try to get someone to confess a secret to you privately.",
        "Pretend you have lost your voice and only use gestures for 5 minutes.",
        "Convince someone that they have something stuck in their teeth for 5 minutes.",
        "Try to steal a small item from someone without them noticing.",
        "Pick a player and 'hate-stare' them every time they look at you.",
        "Convinced the group you're leaving the game for a fake emergency."
      ],
      [CardType.CHAOS]: [
        "Everyone must reveal the last photo they took in their gallery.",
        "The current player becomes the 'King/Queen' and assigns one dare to anyone.",
        "Everyone swap seats based on height (tallest to shortest).",
        "The 'Confession' round: Everyone must reveal one deep secret.",
        "Everyone must delete one app from their phone chosen by the group.",
        "Everyone must swap seats with the person sitting farthest away from them.",
        "The 'Copycat' Rule: Everyone must copy the physical movements and posture of the person to their left for 10 minutes.",
        "Everyone must speak only in rhymes for the next 10 minutes.",
        "The 'Blind' Round: Everyone must keep their eyes closed for the next two turns (except the reader).",
        "The 'Chain' Rule: Everyone must hold hands with the people sitting next to them until a Dare is successfully completed.",
        "The 'Social Risk' Rule: The person who last posted on social media must let the group delete one non-essential photo from their gallery.",
        "The 'Truth Bomb': For the next 10 minutes, no one is allowed to lie. Anyone caught lying must do a group-voted EXTREME dare."
      ]
    }
  },
  [Difficulty.HARD]: {
    [Intensity.CASUAL]: {
      [CardType.TRUTH]: [
        "What is your biggest regret in life so far?",
        "What's the most embarrassing thing your parents have done?",
        "Have you ever lied to get out of a social event?",
        "What's the longest you've gone without brushing your teeth?",
        "What's the weirdest thing you've ever searched on Google?",
        "Have you ever stolen something small (like a candy bar)?",
        "Which player here do you find most intimidating?",
        "What is a movie that you are ashamed to admit you love?",
        "Have you ever peed in a pool?",
        "What's your biggest pet peeve in other people?"
      ],
      [CardType.DARE]: [
        "Let someone draw on your arm with a pen.",
        "Dance for 1 minute with no music.",
        "Let the person to your left send a text from your phone to anyone.",
        "Allow the group to read your last 3 sent text messages.",
        "Lick the wall (pick a clean spot!).",
        "Try to do the 'splits' as best as you can.",
        "Call a pizza place and try to order something that isn't on the menu.",
        "Allow someone to give you a 'blindfolded' snack test.",
        "Do your best impression of another player in the room.",
        "Let someone give you a temporary tattoo with a marker."
      ],
      [CardType.SECRET]: [
        "For the next 5 minutes, you cannot say the word 'The'.",
        "Try to get someone to say 'Potato' without saying it yourself.",
        "Every time someone says your name, reply with 'Your Highness'.",
        "Try to get someone to give you a high-five without asking.",
        "Keep one hand on your head whenever you are not speaking.",
        "Try to swap your glass/plate with someone else's without them noticing."
      ],
      [CardType.CHAOS]: [
        "The current player chooses someone to do a joint dare with.",
        "The 'Statue' Game: Everyone freezes until the current player says 'Go'.",
        "Everyone must reveal their screen time for today.",
        "The 'Silent Round': No one can speak until the next Truth card.",
        "Everyone must share their most embarrassing childhood memory.",
        "Everyone swap seats based on height (tallest to shortest).",
        "The 'No Thumbs' Rule: No one can use their thumbs for any task or gesture for the next 5 minutes.",
        "The 'Third Person' Rule: Everyone must refer to themselves in the third person for the next 10 minutes.",
        "Everyone must swap one item of clothing with the person sitting directly across from them.",
        "The 'Battery' Rule: The person with the most phone battery must do a Truth chosen by the person with the least battery.",
        "Everyone must speak like a movie villain for the next round.",
        "The 'Puppet Master': The current player can control the physical movements of one other player for the next 2 minutes.",
        "Everyone must keep their eyes on the floor and can only look up when it's their turn to speak."
      ]
    },
    [Intensity.BOLD]: {
      [CardType.TRUTH]: [
        "What's the biggest lie you've ever told a partner?",
        "Have you ever cheated on a test or an assignment?",
        "What's the meanest thing you've said about someone here?",
        "What's the most illegal thing you've ever done?",
        "Who is the most attractive person in this room, honestly?",
        "Have you ever pretended to like a gift just to be polite?",
        "What is your biggest insecurity in relationships?",
        "Have you ever stalked an ex on social media?",
        "What was the most awkward date you've ever been on?",
        "Have you ever been caught doing something you shouldn't?"
      ],
      [CardType.DARE]: [
        "Let someone look through your messages for 1 minute.",
        "Call your crush and tell them a cheesy pick-up line.",
        "Eat a spoonful of hot sauce or mustard.",
        "Let someone send a 'DM' to a celebrity from your account.",
        "Sniff the socks of the person to your right.",
        "Post a silly selfie to your story and leave it for 10 minutes.",
        "Let someone give you a 'surprise' wet willy.",
        "Exchange one item of clothing with the person to your left.",
        "Give a 5-minute foot massage to the person of your choice.",
        "Let the group look through your 'Recently Deleted' photos."
      ],
      [CardType.SECRET]: [
        "Try to convince the group you have a sudden 'psychic' vision.",
        "Make a 'bird' sound every time someone says 'The' for 5 minutes.",
        "Continuously try to change the topic of conversation to 'Aliens'.",
        "Try to get two people in the room to start an argument.",
        "Wink at someone every time they look at you for the next 5 minutes.",
        "Try to get someone to confess a secret to you privately."
      ],
      [CardType.CHAOS]: [
        "Everyone must reveal the last thing they searched for on their phone.",
        "Everyone must do 10 squats right now.",
        "The 'Silent Rule': Anyone who speaks out of turn must do a dare.",
        "Swap all player names for the next 3 rounds.",
        "Everyone must change their phone wallpaper to a photo chosen by the group.",
        "Everyone must speak in a high-pitched voice for the next 2 minutes.",
        "The 'Silent Treatment': No one is allowed to speak to the current player until they have successfully completed their next turn.",
        "The 'Lock Screen' Rule: Everyone must change their phone lock screen to a photo chosen by the group for the remainder of the game.",
        "The 'Servant' Rule: The tallest person in the room must act as a servant (fetching drinks, etc.) for the shortest person for the next 2 rounds.",
        "The 'Group Chat' Rule: The group creates a new group chat. Everyone must send the last photo they took to the chat immediately.",
        "The 'Social Media' Rule: Everyone must post a comment on the first post they see on their Instagram feed, saying whatever the group decides.",
        "The 'Identity Swap': Everyone must switch identities with the person to their left. You must answer for them and act like them for 10 minutes.",
        "The 'Phone Pile': Everyone places their phone in a pile in the center. The first person to touch their phone for any reason must do a BOLD dare."
      ]
    },
    [Intensity.EXTREME]: {
      [CardType.TRUTH]: [
        "What is your deepest, darkest fear regarding your future?",
        "What's the most 'NSFW' thing on your phone right now?",
        "Who in this room do you like the least and why?",
        "What's a secret you've kept from your best friend?",
        "Have you ever had a crush on a friend's partner?",
        "What's the most money you've ever lost gambling or on a bad investment?",
        "What is the biggest regret of your life so far?",
        "If you had to delete one person from your life forever, who would it be?",
        "What's the most embarrassing thing you've done while intoxicated?",
        "Have you ever been attracted to someone else while in a relationship?"
      ],
      [CardType.DARE]: [
        "Let someone send a 'Hey' text to your most recent crush.",
        "Eat a 'shot' of a mixture of 5 different condiments.",
        "Do your best 'crying' performance for 2 minutes straight.",
        "Let someone call your parents and tell them you're getting married tomorrow.",
        "Let someone shave a tiny (1cm) patch of hair from your arm or leg.",
        "Call an ex and tell them you miss them (then hang up immediately).",
        "Put as many marshmallows/crackers in your mouth as possible and say your name.",
        "Let someone give you a 'surprise' wet willy or pinch.",
        "Let the group post a status on your main social media account.",
        "Take a drink of a mystery concoction made of 3 safe kitchen liquids."
      ],
      [CardType.SECRET]: [
        "Try to make someone feel really guilty about something they didn't do.",
        "Try to get someone to let you borrow their phone for a 'fake' call.",
        "Convince someone that they have something stuck in their teeth for 5 minutes.",
        "Pretend you have lost your voice and only use gestures for 5 minutes.",
        "Try to get someone to confess a secret to you privately.",
        "Convinced the group you're leaving the game for a fake emergency."
      ],
      [CardType.CHAOS]: [
        "The game intensity is locked to EXTREME for the next 10 minutes.",
        "Everyone must reveal the last photo they took in their gallery.",
        "The 'Confession' round: Everyone must reveal one deep secret.",
        "Everyone must let the person to their right send one text from their phone.",
        "Everyone must delete one app from their phone chosen by the group.",
        "Everyone must drink a 'mystery cup' prepared by the winner of the last round.",
        "The 'Text Exposure' Rule: Everyone must scroll through their text messages for 30 seconds while the group watches.",
        "The 'New Rule Maker': The next person to finish a card gets to invent a permanent new rule that lasts the rest of the night.",
        "The 'Total Swap': Everyone switches seats and identities with the person to their right for the next 15 minutes. You are that person now.",
        "The 'Browser History' Rule: Everyone must reveal their last 5 Google searches.",
        "The 'Contact Roulette': Everyone must call the 10th contact in their phone and stay on the line for 30 seconds without explaining why.",
        "The 'Extreme Forfeit': The group decides on one EXTREME dare. Everyone must vote on who has to perform it right now.",
        "The 'Ultimate Chaos': The turn order is reversed, everyone swaps names, and the intensity is set to EXTREME for the rest of the game."
      ]
    }
  }
};

export const CARD_TITLES: Record<string, Record<CardType, string>> = {
  en: {
    [CardType.TRUTH]: 'Truth',
    [CardType.DARE]: 'Dare',
    [CardType.SECRET]: 'Secret',
    [CardType.CHAOS]: 'Chaos'
  },
  fr: {
    [CardType.TRUTH]: 'Vérité',
    [CardType.DARE]: 'Action',
    [CardType.SECRET]: 'Secret',
    [CardType.CHAOS]: 'Chaos'
  },
  ar: {
    [CardType.TRUTH]: 'حقيقة',
    [CardType.DARE]: 'تحدي',
    [CardType.SECRET]: 'سر',
    [CardType.CHAOS]: 'فوضى'
  }
};

export const UI_TEXT = {
  en: {
    intensity: "Intensity",
    mode: "Mode",
    ai: "AI",
    on: "ON",
    off: "OFF",
    tapToSpin: "TAP TO SPIN",
    spinning: "SPINNING...",
    chooseChallenge: "Choose Your Challenge",
    privateMission: "Private Mission",
    tapToReveal: "Tap to reveal your destiny",
    secretMission: "SECRET MISSION",
    passPhone: "Pass the phone to",
    everyoneElseLookAway: "Everyone else, look away!",
    iAmAlone: "I Am Alone",
    done: "Done",
    letsSpin: "LET'S SPIN!",
    settings: "Settings",
    darkMode: "Dark Mode",
    difficulty: "Challenge Difficulty",
    language: "Language",
    aiGameMaster: "AI Game Master",
    aiDesc: "Generates unique prompts using Gemini",
    gameIntensity: "Game Intensity",
    gameRules: "Game Rules",
    backToGame: "BACK TO GAME",
    players: "Players",
    enterName: "Enter name...",
    rules: [
      "Players take turns spinning the wheel.",
      "The selected player chooses a card category.",
      "Secret cards are for that player's eyes only!",
      "Chaos cards affect the entire group.",
      "Respect everyone's boundaries – have fun!"
    ]
  },
  fr: {
    intensity: "Intensité",
    mode: "Mode",
    ai: "IA",
    on: "ACTIVÉE",
    off: "DÉSACTIVÉE",
    tapToSpin: "TOURNER LA ROUE",
    spinning: "ROTATION...",
    chooseChallenge: "Choisissez Votre Défi",
    privateMission: "Mission Secrète",
    tapToReveal: "Appuyez pour révéler votre destin",
    secretMission: "MISSION SECRÈTE",
    passPhone: "Passez le téléphone à",
    everyoneElseLookAway: "Que les autres détournent le regard !",
    iAmAlone: "Je suis seul(e)",
    done: "Terminé",
    letsSpin: "C'EST PARTI !",
    settings: "Paramètres",
    darkMode: "Mode Sombre",
    difficulty: "Difficulté du Défi",
    language: "Langue",
    aiGameMaster: "Maître du jeu IA",
    aiDesc: "Génère des défis uniques grâce à Gemini",
    gameIntensity: "Intensité du Jeu",
    gameRules: "Règles du Jeu",
    backToGame: "RETOUR AU JEU",
    players: "Joueurs",
    enterName: "Entrez un nom...",
    rules: [
      "Les joueurs tournent la roue chacun leur tour.",
      "Le joueur désigné choisit une catégorie de carte.",
      "Les cartes Secret sont réservées aux yeux du joueur !",
      "Les cartes Chaos s'appliquent à tout le groupe.",
      "Respectez les limites de chacun – amusez-vous bien !"
    ]
  },
  ar: {
    intensity: "الشدة",
    mode: "الوضع",
    ai: "الذكاء الاصطناعي",
    on: "مفعل",
    off: "معطل",
    tapToSpin: "اضغط للتدوير",
    spinning: "جاري التدوير...",
    chooseChallenge: "اختر تحديك",
    privateMission: "مهمة سرية",
    tapToReveal: "اضغط لكشف مصيرك",
    secretMission: "مهمة سرية",
    passPhone: "مرر الهاتف إلى",
    everyoneElseLookAway: "على الجميع عدم النظر!",
    iAmAlone: "أنا بمفردي",
    done: "تم",
    letsSpin: "هيا ندور!",
    settings: "الإعدادات",
    darkMode: "الوضع الداكن",
    difficulty: "صعوبة التحدي",
    language: "اللغة",
    aiGameMaster: "متحكم اللعبة الذكي",
    aiDesc: "ينشئ كروت وتحديات فريدة باستخدام Gemini",
    gameIntensity: "شدة اللعبة",
    gameRules: "قواعد اللعبة",
    backToGame: "العودة للعبة",
    players: "اللاعبين",
    enterName: "أدخل الاسم...",
    rules: [
      "يتناوب اللاعبون على تدوير العجلة.",
      "يختار اللاعب المحدد فئة الكرت.",
      "كروت السر مخصصة لذلك اللاعب فقط!",
      "كروت الفوضى تطبق على المجموعة بأكملها.",
      "احترم حدود الجميع واستمتع!"
    ]
  }
};

export const INTENSITY_INFO = {
  [Intensity.CASUAL]: {
    label: { en: 'Casual', fr: 'Familial', ar: 'عادي' },
    emoji: '🧒',
    color: 'bg-blue-500'
  },
  [Intensity.BOLD]: {
    label: { en: 'Bold', fr: 'Audacieux', ar: 'جريء' },
    emoji: '😏',
    color: 'bg-orange-500'
  },
  [Intensity.EXTREME]: {
    label: { en: 'Extreme', fr: 'Extrême', ar: 'قوي جداً' },
    emoji: '🔥',
    color: 'bg-red-600'
  }
};

export const DIFFICULTY_INFO = {
  [Difficulty.EASY]: {
    label: { en: 'Easy', fr: 'Facile', ar: 'سهل' },
    emoji: '🟢',
    color: 'bg-green-500'
  },
  [Difficulty.HARD]: {
    label: { en: 'Hard', fr: 'Difficile', ar: 'صعب' },
    emoji: '🔴',
    color: 'bg-red-500'
  }
};

export const FALLBACK_CARDS_FR = {
  [Difficulty.EASY]: {
    [Intensity.CASUAL]: {
      [CardType.TRUTH]: [
        "Quelle est votre chose préférée chez vous-même ?",
        "Quelle est votre plus grande peur ?",
        "À qui faites-vous le plus confiance ?",
        "Quelle habitude aimeriez-vous changer ?",
        "Qu'est-ce qui vous rend vraiment heureux ?",
        "Avez-vous déjà menti pour éviter un problème ?",
        "Quel est votre plus grand rêve ?",
        "Qu'est-ce qui vous agace le plus chez les autres ?",
        "Êtes-vous plutôt impulsif ou réfléchi ?",
        "Quel est votre meilleur souvenir d'enfance ?",
        "Si vous pouviez avoir un super-pouvoir, quel serait-il ?",
        "Quel est votre plat préféré quand vous êtes fatigué(e) ?"
      ],
      [CardType.DARE]: [
        "Sourire sans vous arrêter pendant 20 secondes 🙂",
        "Imitez un animal de votre choix 🐒",
        "Parlez comme un robot pendant un tour 🤖",
        "Applaudissez-vous chaleureusement",
        "Dites trois choses positives sur vous-même",
        "Échangez de place avec quelqu'un",
        "Racontez une blague très courte",
        "Marchez comme un mannequin pendant 10 secondes",
        "Faites un high-five à la personne à votre gauche",
        "Chantez le refrain de votre chanson préférée"
      ],
      [CardType.SECRET]: [
        "Fredonnez doucement une chanson jusqu'à ce que quelqu'un la devine.",
        "Clignez de l'œil à la personne à votre droite chaque fois qu'elle rit.",
        "Essayez de caser le mot 'Banane' dans trois phrases différentes.",
        "Ne montrez pas vos dents quand vous riez pendant les 2 prochains tours.",
        "Touchez votre nez dès que la personne à votre gauche parle."
      ],
      [CardType.CHAOS]: [
        "Tout le monde change de place !",
        "Interdiction de dire 'Oui' ou 'Non' pendant le prochain tour.",
        "Chacun doit parler en chuchotant jusqu'à la prochaine carte Vérité.",
        "Le sol est de la lave : Tout le monde lève les pieds du sol pendant 30 secondes.",
        "Inversez le sens du jeu à partir de maintenant.",
        "Pas de vrais prénoms pendant 5 minutes. Surnoms uniquement !"
      ]
    },
    [Intensity.BOLD]: {
      [CardType.TRUTH]: [
        "Avez-vous déjà eu un coup de cœur pour une personne interdite ?",
        "À qui avez-vous pensé en dernier avant de vous endormir hier ?",
        "Avez-vous déjà caché vos sentiments à quelqu'un dans cette pièce ?",
        "Qu'est-ce qui vous attire en premier chez quelqu'un ?",
        "Avez-vous déjà été jaloux(se) sans le montrer ?",
        "Tombez-vous amoureux(se) facilement ?",
        "Avez-vous déjà regretté une décision sous le coup de l'émotion ?"
      ],
      [CardType.DARE]: [
        "Regardez quelqu'un dans les yeux pendant 20 secondes sans parler",
        "Chuchotez un petit secret à la personne de votre choix",
        "Faites un compliment sincère à quelqu'un dans la pièce",
        "Envoyez un emoji 😏 au dernier contact avec qui vous avez parlé",
        "Décrivez votre personnalité en trois mots",
        "Laissez le groupe vous poser une question audacieuse"
      ],
      [CardType.SECRET]: [
        "Faites dire le mot 'Chocolat' à quelqu'un sans poser la question directement.",
        "Toussez discrètement chaque fois que la personne à votre droite dit une voyelle.",
        "Essayez de faire rire quelqu'un sans parler ni le toucher.",
        "À chaque fois que vous parlez, vous devez d'abord toucher votre menton."
      ],
      [CardType.CHAOS]: [
        "Tout le monde doit parler avec un accent choisi par le joueur actuel.",
        "Échangez un accessoire (montre, veste, chapeau) avec votre voisin.",
        "Quiconque touche son téléphone dans les 10 prochaines minutes doit faire un gage !",
        "Tout le monde fait un compliment à la personne à sa gauche.",
        "La personne aux cheveux les plus courts choisit la prochaine catégorie."
      ]
    },
    [Intensity.EXTREME]: {
      [CardType.TRUTH]: [
        "Avez-vous déjà brisé le cœur de quelqu'un involontairement ?",
        "Y a-t-il une personne de votre passé à laquelle vous pensez encore ?",
        "Avez-vous déjà fait un compromis avec vos valeurs pour quelqu'un ?",
        "Quelle est votre plus grande vulnérabilité émotionnelle ?",
        "Quel est un secret que vous n'avez jamais révélé à personne ici ?"
      ],
      [CardType.DARE]: [
        "Avouez quelque chose que vous n'avez jamais osé dire à voix haute",
        "Dites à quelqu'un pourquoi on pourrait tomber sous son charme",
        "Lisez votre dernier message privé (sans citer le nom)",
        "Dites ce que vous ressentez vraiment en ce moment",
        "Laissez le groupe poser une question sans filtre"
      ],
      [CardType.SECRET]: [
        "Essayez d'obtenir une confidence secrète de quelqu'un en privé.",
        "Faites croire que vous avez perdu la voix et communiquez par gestes pendant 3 minutes.",
        "Faites croire à quelqu'un qu'il a quelque chose entre les dents."
      ],
      [CardType.CHAOS]: [
        "Chacun montre la dernière photo prise dans sa galerie.",
        "Le joueur actuel devient le Roi/la Reine et attribue un défi à qui il veut.",
        "Tout le monde change de siège selon sa taille (du plus grand au plus petit).",
        "Tournée de confessions : Tout le monde révèle un petit secret."
      ]
    }
  },
  [Difficulty.HARD]: {
    [Intensity.CASUAL]: {
      [CardType.TRUTH]: [
        "Quel est votre plus grand regret à ce jour ?",
        "Quelle est la chose la plus embarrassante que vos parents ont faite ?",
        "Avez-vous déjà menti pour annuler une soirée ?",
        "Quelle est la recherche la plus bizarre que vous ayez faite sur Google ?",
        "Quel joueur ici trouvez-vous le plus impressionnant ?"
      ],
      [CardType.DARE]: [
        "Laissez quelqu'un vous dessiner un symbole sur le bras.",
        "Dansez pendant 1 minute sans musique.",
        "Laissez la personne à votre gauche écrire un message rigolo depuis votre téléphone.",
        "Faites votre meilleure imitation d'un autre joueur autour de la table."
      ],
      [CardType.SECRET]: [
        "Interdiction de dire le mot 'Le' ou 'La' pendant 5 minutes.",
        "Chaque fois que quelqu'un dit votre prénom, répondez par 'Votre Majesté'.",
        "Gardez une main sur la tête à chaque fois que vous ne parlez pas."
      ],
      [CardType.CHAOS]: [
        "Mode Silencieux : Personne ne peut parler jusqu'à la prochaine carte Vérité.",
        "Chacun doit raconter son souvenir d'enfance le plus honteux.",
        "Règle du troisième personnage : Parlez de vous à la troisième personne pendant 5 minutes."
      ]
    },
    [Intensity.BOLD]: {
      [CardType.TRUTH]: [
        "Quel est le plus grand mensonge que vous ayez dit à un proche ?",
        "Avez-vous déjà triché à un examen ou un jeu ?",
        "Quelle est la personne la plus attirante dans cette pièce, honnêtement ?",
        "Avez-vous déjà espionné un(e) ex sur les réseaux sociaux ?"
      ],
      [CardType.DARE]: [
        "Laissez quelqu'un regarder vos messages pendant 30 secondes.",
        "Mangez une cuillère de moutarde ou d'épice fort.",
        "Postez une photo amusante en story pendant 10 minutes.",
        "Échangez un vêtement avec la personne à votre gauche."
      ],
      [CardType.SECRET]: [
        "Essayez de lancer une discussion sur les extraterrestres l'air de rien.",
        "Faites un petit bruit d'oiseau dès que quelqu'un dit un mot spécifique."
      ],
      [CardType.CHAOS]: [
        "Tout le monde montre son temps d'écran d'aujourd'hui !",
        "Échangez les prénoms de tous les joueurs pendant les 3 prochains tours.",
        "Chacun doit parler avec une voix aiguë pendant 2 minutes."
      ]
    },
    [Intensity.EXTREME]: {
      [CardType.TRUTH]: [
        "Quelle est votre plus grande peur concernant votre avenir ?",
        "Quel est le plus grand secret que vous gardez par loyauté ?",
        "Si vous deviez supprimer une habitude toxique aujourd'hui, quelle serait-elle ?"
      ],
      [CardType.DARE]: [
        "Envoyez un 'Hey' au dernier contact à qui vous avez pensé.",
        "Jouez une scène d'improvisation tragique pendant 1 minute.",
        "Laissez le groupe inventer un statut à publier sur vos réseaux."
      ],
      [CardType.SECRET]: [
        "Faites croire au groupe que vous devez passer un appel d'urgence imprévu."
      ],
      [CardType.CHAOS]: [
        "L'intensité est verrouillée sur EXTRÊME pendant les 10 prochaines minutes.",
        "Tournée d'imitation générale : Chacun imite la personne à sa droite."
      ]
    }
  }
};

export const FALLBACK_CARDS_AR = {
  [Difficulty.EASY]: {
    [Intensity.CASUAL]: {
      [CardType.TRUTH]: [
        "ما هو أكثر شيء تحبه في نفسك؟",
        "ما هو أكبر مخاوفك؟",
        "من هو الشخص الذي تثق به أكثر من غيره؟",
        "ما هي العادة التي ترغب في تغييرها؟",
        "ما الذي يجعلك سعيداً حقاً؟",
        "هل كذبت من قبل لتتجنب المشاكل؟",
        "ما هو حلمك الأكبر؟",
        "ما الذي يزعجك أكثر في الآخرين؟"
      ],
      [CardType.DARE]: [
        "ابتسم دون توقف لمدة 20 ثانية 🙂",
        "قلد صوتاً لحيوان من اختيارك 🐒",
        "تحدث مثل الروبوت لجولة واحدة 🤖",
        "صفق لنفسك بحرارة",
        "قل ثلاثة أشياء إيجابية عن نفسك"
      ],
      [CardType.SECRET]: [
        "دندن أغنية بصوت خفيض حتى يكتشفها أحد.",
        "اغمز للشخص عن يمينك كلما ضحك."
      ],
      [CardType.CHAOS]: [
        "الجميع يغير مكان جلوسه!",
        "ممنوع القول 'نعم' أو 'لا' في الجولة القادمة.",
        "على الجميع التحدث بهمس حتى الكرت القادم."
      ]
    },
    [Intensity.BOLD]: {
      [CardType.TRUTH]: [
        "هل أُعجبت بشخص ما سرّاً من قبل؟",
        "من كان آخر شخص فكرت فيه قبل النوم؟",
        "هل أخفيت مشاعرك عن شخص في هذه الغرفة؟"
      ],
      [CardType.DARE]: [
        "انظر في عين شخص لمدة 20 ثانية دون كلام",
        "اهنس بسر صغير للشخص الذي تختاره",
        "قل مجاملة صادقة لشخص في الغرفة"
      ],
      [CardType.SECRET]: [
        "اجعل شخصاً يقول كلمة 'تفاحة' دون أن تطلبها مباشرة."
      ],
      [CardType.CHAOS]: [
        "على الجميع التحدث بلكنة يختارها اللاعب الحالي.",
        "تبادل قطعة اكسسوار مع جارك."
      ]
    },
    [Intensity.EXTREME]: {
      [CardType.TRUTH]: [
        "هل كسرت قلب شخص ما بدون قصد؟",
        "هل هناك شخص من الماضي ما زلت تفكر فيه؟"
      ],
      [CardType.DARE]: [
        "اعترف بشيء لم تقله بصوت عالٍ من قبل",
        "قل لشخص لماذا قد يعجب الناس به"
      ],
      [CardType.SECRET]: [
        "حاول الحصول على سر من شخص ما بشكل خاص."
      ],
      [CardType.CHAOS]: [
        "يكشف الجميع عن آخر صورة التقاطها في المعرض."
      ]
    }
  },
  [Difficulty.HARD]: {
    [Intensity.CASUAL]: {
      [CardType.TRUTH]: ["ما هو أكبر ندم لك حتى الآن؟"],
      [CardType.DARE]: ["ارقص لمدة دقيقة بدون موسيقى."],
      [CardType.SECRET]: ["ممنوع استخدام كلمة 'هذا' لمدة 5 دقائق."],
      [CardType.CHAOS]: ["وضع الصمت: لا أحد يتحدث حتى كرت الحقيقة القادم."]
    },
    [Intensity.BOLD]: {
      [CardType.TRUTH]: ["ما هي أكبر كذبة قلتها لشخص قريب؟"],
      [CardType.DARE]: ["اسمح لشخص برؤية رسائلك لمدة 30 ثانية."],
      [CardType.SECRET]: ["حاول فتح موضوع عن الكائنات الفضائية."],
      [CardType.CHAOS]: ["يعرض الجميع وقت الشاشة لليوم!"]
    },
    [Intensity.EXTREME]: {
      [CardType.TRUTH]: ["ما هو أكبر سر تحتفظ به؟"],
      [CardType.DARE]: ["أرسل كلمة 'مرحباً' لآخر شخص فكرت فيه."],
      [CardType.SECRET]: ["ادعي أن عليك إجراء مكالمة طارئة."],
      [CardType.CHAOS]: ["جولة تقليد شاملة: يقلد كل شخص الشخص على يمينه."]
    }
  }
};

export const FALLBACK_CARDS_BY_LANG: Record<string, any> = {
  en: FALLBACK_CARDS,
  fr: FALLBACK_CARDS_FR,
  ar: FALLBACK_CARDS_AR
};