const fs = require('fs');
const path = require('path');

const elements = [
  // ---------------------------------------------------------------------------
  // عنوان المحاضرة الرئيسي
  // ---------------------------------------------------------------------------
  {
    "type": "h1",
    "text": "المحاضرة الخامسة: لغة الجندر والتواصل بين الجنسين (Unit 5: Speaking of Gender — Language and Communication)",
    "badge": "الوحدة 5"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "مقدمة الوحدة الخامسة ومفهوم الجندر (Gender Concept)",
    "content": "تناقش هذه الوحدة أبحاث الدكتورة ديبورا تانن (Deborah Tannen) حول الفروق اللغوية وأساليب التواصل والتنشئة الاجتماعية بين الذكور والإناث في الطفولة ومرحلة الرشد والعمل."
  },

  // ===========================================================================
  // القسم الأول: القراءة للأفكار الرئيسية (READING FOR MAIN IDEAS)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "1.",
    "text": "الأفكار الرئيسية: صح أم خطأ مع التصويب (True / False with Corrections)"
  },
  {
    "type": "qa",
    "question": "1. A child's sex at birth determines how the child will think, act, and speak later in life.\n(جنس الطفل عند الولادة يحدد كيف سيفكر ويتصرف ويتكلم لاحقاً في الحياة).",
    "answer": "False (خاطئة) — التصويب: Sex at birth determines biological traits, but social behavior and communication are learned through culture (يتعلم الأطفال السلوك والتواصل من الثقافة المحيطة)."
  },
  {
    "type": "qa",
    "question": "2. People learn masculine and feminine behavior.\n(يتعلم الناس السلوك الذكوري والأنثوي معاً).",
    "answer": "False (خاطئة) — التصويب: People learn masculine OR feminine behavior (يتعلم الأفراد إما السلوك الذكوري أو السلوك الأنثوي وفق جنسهم وثقافتهم)."
  },
  {
    "type": "qa",
    "question": "3. Men and women learn to use language differently.\n(يتعلم الرجال والنساء استخدام اللغة بأساليب مختلفة).",
    "answer": "True (صحيحة) — فالنساء يستخدمن أسلوب بناء العلاقات والتعاطف، بينما يميل الرجال إلى إظهار المعرفة والقيادة."
  },
  {
    "type": "qa",
    "question": "4. Gender differences can be seen in the ways that children use language when they fight.\n(يمكن ملاحظة الفوارق بين الجنسين في طريقة استخدام الأطفال للغة أثناء الشجار).",
    "answer": "True (صحيحة) — يميل الصبيان للأوامر والتحدي المباشر، بينما تميل الفتيات للتفاوض والمقترحات والإنصاف."
  },
  {
    "type": "qa",
    "question": "5. Differences in communication between males and females are the same in all cultures.\n(الفوارق في التواصل بين الذكور والإناث متطابقة في جميع الثقافات).",
    "answer": "False (خاطئة) — التصويب: Communication styles vary across cultures, and there is more than one way to communicate (تختلف أساليب التواصل من ثقافة لأخرى)."
  },
  {
    "type": "qa",
    "question": "6. Girls gain status by showing their knowledge about sports and news.\n(تكتسب الفتيات المكانة الاجتماعية بإظهار معرفتهن بالرياضة والأخبار).",
    "answer": "False (خاطئة) — التصويب: Boys gain status by showing knowledge about sports/news; girls gain status and closeness by sharing talk and friendship (يكتسب الفتيان المكانة بالرياضة والقيادة، بينما تكتسبها الفتيات بالشعبية وتبادل الأحاديث والصداقة)."
  },
  {
    "type": "qa",
    "question": "7. Girls get much of their identity from being part of a group.\n(تستمد الفتيات قدراً كبيراً من هويتهن من كونهن جزءاً من مجموعة مترابطة).",
    "answer": "True (صحيحة) — الانتماء للمجموعة والمساواة والتقارب يمثل ركناً أساسياً في هوية الفتيات."
  },
  {
    "type": "qa",
    "question": "8. Men usually talk more about other people than women do.\n(يتحدث الرجال عن الناس والآخرين أكثر مما تتحدث النساء).",
    "answer": "False (خاطئة) — التصويب: Women usually talk more about people and relationships; men usually talk more about activities, sports, and news (تتحدث النساء أكثر عن العلاقات والأشخاص، بينما يتحدث الرجال عن الأنشطة والأخبار)."
  },

  // ===========================================================================
  // القسم الثاني: أسئلة التنشئة الاجتماعية للجنسين (GENDER SOCIALIZATION MCQS)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "2.",
    "text": "أسئلة الاستيعاب: التنشئة الاجتماعية واللغوية (Gender Socialization MCQs)"
  },
  {
    "type": "qa",
    "question": "1. When do gender differences between boys and girls begin?\n(متى تبدأ الاختلافات في الجنس بين الصبيان والفتيات؟)",
    "options": [
      "a. before birth (قبل الولادة)",
      "b. at birth (عند الولادة)",
      "c. shortly after birth (بعد الولادة بوقت قصير)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "2. Why were different colors used in the children's rooms?\n(لم استعملت ألوان مختلفة في غرف الأطفال؟)",
    "options": [
      "a. for variety (لأجل التنويع)",
      "b. because of preference (بسبب الرغبة والميل الشخصي)",
      "c. reflection of gender (تعبيراً وانعكاساً لجنس الطفل)"
    ],
    "correctOptionIndex": 2
  },
  {
    "type": "qa",
    "question": "3. What might Tommy do if he played with Joy and her friends?\n(ما الذي قد يفعله تومي إذا لعب مع جوي وصديقاتها؟)",
    "options": [
      "a. argue with them (يتجادل معهن)",
      "b. tell them what to do (يخبرهن بما يفعلنه ويصدر الأوامر)",
      "c. invite other boys to join the group (يدعو الصبيان الآخرين للانضمام إلى المجموعة)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "4. Compared to Tommy's friendships, Joy's friendships are probably .........\n(مقارنة بصداقات تومي فإن صداقات جوي ربما تكون:)",
    "options": [
      "a. more boring (مملة أكثر)",
      "b. longer lasting (دائمة أكثر)",
      "c. less competitive (أقل تنافساً وأكثر مودة)"
    ],
    "correctOptionIndex": 2
  },
  {
    "type": "qa",
    "question": "5. 'Gender' refers to behavior that is considered masculine or feminine according to .........\n('الجنس / الجندر' يدل على السلوك الذي يعتبر ذكورياً أو أنثوياً حسب:)",
    "options": [
      "a. each person (كل شخص بمفرده)",
      "b. members of a culture (أفراد الثقافة والمجتمع)",
      "c. family members (أفراد الأسرة)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "6. Which of the following is emphasized in girls' speech?\n(أي مما يلي يُشدد عليه في حديث الفتيات:)",
    "options": [
      "a. belonging to a group (الانتماء إلى مجموعة)",
      "b. playing fairly (اللعب بإنصاف)",
      "c. being liked (كون الفتاة محبوبة)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "7. What do some men want to prove by discussing sports?\n(ما الذي يريد بعض الرجال أن يثبتوه من خلال مناقشة الرياضة:)",
    "options": [
      "a. They are knowledgeable (أنهم عارفون ومطلعون)",
      "b. They are masculine (أنهم ذوو رجولة)",
      "c. They are interested in sports (أنهم مهتمون بالرياضة)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "8. What do the differences in male and female language show?\n(ما الذي تظهره الفوارق في لغة الذكور والإناث:)",
    "options": [
      "a. Human relationships are difficult (العلاقات الإنسانية صعبة)",
      "b. Human communication is not simple (التواصل الإنساني ليس بسيطاً)",
      "c. Humans can be divided into two genders (يمكن تقسيم البشر إلى جنسين)"
    ],
    "correctOptionIndex": 1
  },

  // ===========================================================================
  // القسم الثالث: استبعاد الكلمة غير المرادفة (SYNONYMS ELIMINATION)
  // ===========================================================================
  {
    "type": "h1",
    "text": "التركيز على المفردات: استبعاد الكلمة غير المرادفة (Cross out NOT a Synonym)",
    "badge": "Vocabulary Workshop"
  },
  {
    "type": "table",
    "title": "جدول تحليل تمرين المفردات الـ 11 وتحديد الكلمة الشاذة",
    "headers": ["الكلمة المستهدفة", "المرادفات الصحيحة", "الكلمة الشاذة (NOT a synonym)", "المعنى بالعربية"],
    "rows": [
      ["1. feminine", "girlish, ladylike", "proud (فخورة)", "أنثوية: تشبه الفتيات والسيدات"],
      ["2. masculine", "tough, bold", "soft (ناعم ولطيف)", "ذكوري: يتسم بالقوة والصلابة والجسارة"],
      ["3. identity", "self, role", "wealth (ثروة)", "الهوية: الذات والدور في المجتمع"],
      ["4. reflects", "shows, expresses", "confuses (يربك ويحيّر)", "يعكس: يُظهر ويعبّر عن الثقافة"],
      ["5. competed", "tried to win, tried to be best", "tried to help each other", "تنافسوا: سعوا للفوز والتفوق وليس المساعدة"],
      ["6. play fairly", "by sharing equally, by the rules", "with tricks (بالحيل والخداع)", "يلعب بإنصاف: بالعدل وقواعد اللعبة"],
      ["7. influence", "guide, change", "ignore (يتجاهل)", "يؤثر: يوجه ويغير سلوك الأبناء"],
      ["8. emphasizes", "gives importance to, gives value to", "gives frequently", "يؤكد ويبرز: يولي أهمية وقيمة كبرى"],
      ["9. status", "power in society, importance in society", "trouble in society", "المكانة الاجتماعية: القوة والأهمية والمنزلة"],
      ["10. gossip", "talk about secrets, talk about behavior", "talk about movies", "يغتاب / يتحدث في شؤون الآخرين وسلوكهم"],
      ["11. proves", "shows clearly, shows to be true", "shows frequently", "يُثبت: يبرهن بوضوح ويظهر الحقيقة"]
    ]
  },

  // ===========================================================================
  // القسم الرابع: الكلمات الخاصة بالجنس (GENDER-SPECIFIC WORDS)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "3.",
    "text": "الكلمات الخاصة بالجنس في اللغة الإنكليزية (Gender-Specific Words)"
  },
  {
    "type": "table",
    "title": "أزواج الكلمات الخاصة بالمذكر والمؤنث",
    "headers": ["المذكر (Male / Masculine)", "المؤنث (Female / Feminine)", "المعنى باللغة العربية"],
    "rows": [
      ["actor", "actress", "ممثل / ممثلة"],
      ["bachelor", "bachelorette", "أعزب / عزباء"],
      ["waiter", "waitress", "نادل / نادلة مطعم"],
      ["hero", "heroine", "بطل / بطلة"],
      ["host", "hostess", "مضيف / مضيفة"],
      ["widower", "widow", "أرمل / أرملة"],
      ["prince", "princess", "أمير / أميرة"]
    ]
  },

  // ===========================================================================
  // القسم الخامس: أدوات المقارنة والمخالفة (TRANSITIONS: COMPARE & CONTRAST)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مهارات الكتابة: أدوات المقارنة والمخالفة (Transitions to Compare & Contrast)",
    "badge": "Writing Skills"
  },
  {
    "type": "table",
    "title": "أدوات الربط والانتقال للمقارنة (الشبه) وللمخالفة (التباين)",
    "headers": ["الوظيفة", "أدوات الربط (Transitions)", "الأمثلة المقررة من المنهاج", "المعنى بالعربية"],
    "rows": [
      ["المقارنة والتشابه (Compare)", "similarly\nalso\nlikewise", "• Similarly, a husband may be annoyed...\n• Language is also part of the ways...\n• Likewise, many women use polite forms...", "بالمثل، كذلك، أيضاً (لبيان التطابق والتشابه في السلوك)"],
      ["المخالفة والتباين (Contrast)", "unlike\non the other hand\nhowever\nin contrast to\nwhile / whereas", "• Unlike his wife, he would rather use a map.\n• American women, on the other hand, talk more.\n• Boys play in large groups; however, girls...", "على العكس من، من ناحية أخرى، بيد أن، بينما، في حين (لبيان الاختلاف)"]
    ]
  },
  {
    "type": "h2",
    "prefix": "4.",
    "text": "تمرين إعادة كتابة الجمل بروابط المقارنة والتباين (Transitions Practice)"
  },
  {
    "type": "qa",
    "question": "1. Joy loves jumping rope with her two best friends. Tommy likes to play ball with a large group of boys. (in contrast to)",
    "answer": "Joy loves jumping rope with her two best friends, in contrast to Tommy who likes to play ball with a large group of boys.\n(تحب جوي القفز بالحبل مع صديقتيها المقربتين، على النقيض من تومي الذي يحب لعب الكرة مع مجموعة كبيرة من الفتيان)."
  },
  {
    "type": "qa",
    "question": "2. Tommy enjoys telling the other boys what to do. Joy doesn't like it when new girls join her friends. (on the other hand)",
    "answer": "Tommy enjoys telling the other boys what to do; on the other hand, Joy doesn't like it when new girls join her friends.\n(يستمتع تومي بإصدار الأوامر؛ ومن ناحية أخرى، لا تحب جوي انضمام فتيات جديدات لصديقاتها)."
  },
  {
    "type": "qa",
    "question": "3. Boys might play in large groups in which every boy knows his place. Girls usually play in smaller groups. (however)",
    "answer": "Boys might play in large groups in which every boy knows his place; however, girls usually play in smaller groups.\n(يلعب الصبيان في مجموعات كبيرة يعرف فيها كل ولد مكانته، بيد أن الفتيات يلعبن عادة في مجموعات أصغر)."
  },
  {
    "type": "qa",
    "question": "4. Boys compete with one another for leadership. Most girls want other girls to like them. (unlike)",
    "answer": "Boys compete with one another for leadership, unlike most girls who want other girls to like them.\n(يتنافس الصبيان على القيادة والزعامة، بخلاف معظم الفتيات اللاتي يفضلن نيل محبة وقبول الأخريات)."
  },
  {
    "type": "qa",
    "question": "5. A woman may be annoyed when her husband simply tells her how to solve the problem. A husband may be annoyed when his wife asks for directions. (likewise)",
    "answer": "A woman may be annoyed when her husband simply tells her how to solve the problem. Likewise, a husband may be annoyed when his wife wants to stop and ask a stranger for directions.\n(قد تنزعج الزوجة حين يسارع زوجها بتقديم حل مباشر لمشكلتها بدلاً من التعاطف، وبالمثل، ينزعج الزوج حين تطلب زوجته التوقف لسؤال غريب عن الطريق)."
  },

  // ===========================================================================
  // القسم السادس: القواعد: أفعال الطلب المهذب (MODALS FOR POLITE REQUESTS)
  // ===========================================================================
  {
    "type": "h1",
    "text": "القواعد: أفعال التعبير عن الطلب المهذب (Modals for Polite Requests)",
    "badge": "Grammar"
  },
  {
    "type": "table",
    "title": "صيغ ومراتب الطلب المهذب في اللغة الإنكليزية",
    "headers": ["الأداة / الصيغة", "درجة التهذيب والاستخدام", "أمثلة نموذجية", "المعنى بالعربية"],
    "rows": [
      ["Can you + V1?", "طلب غير رسمي معتاد (Informal request)", "Can you sign this form?\nCan you hand me the rope?", "هل يمكنك / هل لك أن...؟"],
      ["Could you / Would you + V1?", "طلب مهذب ولطيف يخفف الإلحاح (Polite & Softened)", "Could you please help me?\nWould you return my books?", "هل تتكرم بـ / هلّا ساعدتني من فضلك؟"],
      ["Would you mind + V-ing?", "أعلى صيغ اللباقة والتهذيب (Polite Request with Gerund)", "Would you mind stopping the car?\nWould you mind helping me?", "هل تمانع في إيقاف السيارة / هل يضايقك أن...؟"]
    ]
  },
  {
    "type": "h2",
    "prefix": "5.",
    "text": "تطبيق صياغة الطلبات المهذبة في مواقف واقعية (Polite Requests Practice)"
  },
  {
    "type": "qa",
    "question": "1. Joy wants her friend to hand her the jump rope. How would she ask politely?\n(تريد جوي من صديقتها أن تناولها حبل القفز:)",
    "answer": "Can / Could you please hand me the rope? (هلّا ناولتِني الحبل من فضلك؟)"
  },
  {
    "type": "qa",
    "question": "2. Joy invites her friend to visit her house after school. How would she ask?\n(تدعو جوي صديقتها لزيارة بيتها بعد المدرسة:)",
    "answer": "Could / Would you visit my house after school? (هلّا زرتِ منزلي بعد المدرسة؟)"
  },
  {
    "type": "qa",
    "question": "3. Joy wants her friend Ellen to tell her about their friend Lisa. How would she ask?\n(تطلب جوي من إيلين إخبارها عن صديقتهما ليزا:)",
    "answer": "Could you please tell me about Lisa? (هلّا أخبرتِني عن ليزا؟)"
  },
  {
    "type": "qa",
    "question": "4. Mary wants her husband to come over to the sofa and listen to her problem. How would she ask?\n(تطلب ماري من زوجها الجلوس على الأريكة والاستماع لمشكلتها:)",
    "answer": "Could / Would you come over to the sofa and listen to my problem? (هلّا جلست معي على الأريكة لتستمع لمشكلتي؟)"
  },
  {
    "type": "qa",
    "question": "5. A wife asks her husband to stop the car so she can ask for directions. How would she ask?\n(تطلب الزوجة من زوجها إيقاف السيارة للسؤال عن الاتجاهات:)",
    "answer": "Would you mind stopping the car so I can ask for directions? (هل تمانع إيقاف السيارة قليلاً لأسأل عن الطريق؟)"
  }
];

const docLecture5 = {
  "$schema": "./schema.json",
  "meta": {
    "department": "جميع أقسام كلية التربية",
    "year": "السنة الأولى",
    "semester": "الفصل الأول",
    "subject": "إنكليزي (1)",
    "subjectType": "نظري",
    "lecture": "المحاضرة 5: التواصل بين الجنسين",
    "academicYear": "2024 - 2025"
  },
  "theme": {
    "branchId": "ershad",
    "showWatermark": true,
    "fontSize": "13px",
    "lineHeight": 1.3
  },
  "elements": elements
};

const outputPath = path.resolve(__dirname, 'data-lecture-5.json');
fs.writeFileSync(outputPath, JSON.stringify(docLecture5, null, 2), 'utf8');
console.log(`Successfully generated data-lecture-5.json with ${elements.length} elements!`);
