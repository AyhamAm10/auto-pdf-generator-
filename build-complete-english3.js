const fs = require('fs');
const path = require('path');

const elements = [
  // ---------------------------------------------------------------------------
  // ترويسة ومقدمة النوطة
  // ---------------------------------------------------------------------------
  {
    "type": "h1",
    "text": "نوطة مقرر لغة 3 — كلية التربية (المنهاج الكامل والمترجم مع حل كافة التمارين)",
  },


  // ===========================================================================
  // CHAPTER 1: IDENTITY AND LEARNING (الصفحات 3 إلى 17)
  // ===========================================================================
  {
    "type": "h1",
    "text": "الفصل الأول: الهوية والتعلّم (Chapter 1: Identity and Learning)",
    "badge": "الوحدة 1"
  },

  // --- ص 3: النص القرائي الأول: Stories of Twins ---
  {
    "type": "h2",
    "prefix": "1.",
    "text": "النص القرائي: قصص التوائم (Reading: Stories of Twins)"
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Part 1: Mark and Gerald",
    "english": "Mark and Gerald are identical twin brothers. They met for the first time as adults. They didn't meet each other until the age of 32 because they were separated at birth. They looked identical—exactly the same. When they looked at each other, it was like looking in a mirror. But they grew up in different families. They went to different schools in different towns. They had different friends. So the brothers were very different from each other, right? Wrong! Each brother started to learn about the other. Both liked movies starring the actor John Wayne. Both liked the same sport—wrestling. And both had the same job—as firefighters!",
    "arabic": "مارك وجيرالد أخوان توأمان متطابقان. التقيا للمرة الأولى وهما بالغان، ولم يلتقيا ببعضهما حتى سن الـ 32 لأنهما فُصلا عند الولادة. كانا يبدوان متطابقين تماماً—بالضبط المظهر نفسه. وعندما نظر كل منهما إلى الآخر، بدا الأمر وكأنه ينظر في المرآة. ولكنهما نشآ في عائلتين مختلفتين، وارتادا مدارس مختلفة في بلدات مختلفة، وكان لكل منهما أصدقاء مختلفون. إذن، هل كان الأخوان مختلفين تماماً عن بعضهما، أليس كذلك؟ خطأ! بدأ كل أخ يتعرف على الآخر، وتبيّن أن كليهما يحب الأفلام التي يقوم ببطولتها الممثل جون واين، وكلاهما يعشق الرياضة نفسها—وهي المصارعة، بل وعمل كلاهما في المهنة ذاتها—كرجال إطفاء!",
    "notes": "identical = exactly the same (متطابقان تماماً). separated at birth = فُصلا عند الولادة."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Part 2: The Two Jims",
    "english": "Jim Springer and Jim Lewis are also identical twins. Like Mark and Gerald, they didn't grow up together. They grew up in different families and met for the first time 39 years after they were born. Of course, their appearance was the same: the same height, the same weight, the same hair color and eye color. But they noticed more. They also walked and moved the same way. Their likes and dislikes were the same. They drove the same kind of car. In school, they both liked math and disliked spelling. For vacations, they both enjoyed the exact same beach in Florida. And they both disliked baseball.",
    "arabic": "جيم سبرينغر وجيم لويس هما أيضاً توأمان متطابقان. ومثل مارك وجيرالد، لم ينشآ معاً، بل تربيا في عائلتين منفصلتين والتقيا للمرة الأولى بعد 39 عاماً من ولادتهما. وبالطبع كان مظهرهما الخارجي واحداً: نفس الطول، ونفس الوزن، ونفس لون الشعر ولون العيون. لكنهما لاحظا ما هو أعمق من ذلك؛ فقد كانا يمشيان ويتحركان بنفس الطريقة، وكانت رغباتهما وما يكرهانه متطابقاً، وقادا نفس نوع السيارة! وفي المدرسة، كلاهما كان يحب الرياضيات ويكره التهجئة. وفي الإجازات، كلاهما استمتع بنفس الشاطئ تحديداً في ولاية فلوريدا، وكلاهما كان يكره رياضة البيسبول.",
    "notes": "likes and dislikes = ما نحبه وما نكرهه. appearance = المظهر الخارجي."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Part 3: Twin Studies",
    "english": "Scientists can learn a lot from the study of twins. Our identity—our appearance and personality—seems to come mostly from our parents. Even twins separated from childhood are very much alike.",
    "arabic": "يستطيع العلماء أن يتعلموا الكثير من دراسة التوائم. إن هويتنا—مظهرنا وشخصيتنا—يبدو أنها تنحدر في معظمها من آبائنا (بالوراثة). وحتى التوائم الذين فُصلوا منذ مرحلة الطفولة يتشابهون إلى حد كبير جداً.",
    "notes": "identity = our appearance and personality (الهوية: المظهر والشخصية). alike = متشابهون."
  },

  // --- ص 4: تمارين النص الأول ---
  {
    "type": "h2",
    "prefix": "2.",
    "text": "تمارين بعد القراءة: التحقق من الفهم والتحدث (After Reading)"
  },
  {
    "type": "qa",
    "question": "A. CHECK YOUR UNDERSTANDING (Which sentences are true? Which sentences are false? Fill in T for True or F for False):\n1. Mark and Gerald look the same.",
    "answer": "True (T) — صحيح",
    "explanation": "في النص: 'They looked identical—exactly the same'."
  },
  {
    "type": "qa",
    "question": "2. Mark and Gerald grew up in the same home.",
    "answer": "False (F) — خطأ",
    "explanation": "في النص: 'They grew up in different families' و 'separated at birth'."
  },
  {
    "type": "qa",
    "question": "3. Mark and Gerald have similar interests.",
    "answer": "True (T) — صحيح",
    "explanation": "تشابها في حب أفلام جون واين ورياضة المصارعة والعمل كرجال إطفاء."
  },
  {
    "type": "qa",
    "question": "4. Mark and Gerald do the same kind of work.",
    "answer": "True (T) — صحيح",
    "explanation": "في النص: 'And both had the same job—as firefighters!'."
  },
  {
    "type": "qa",
    "question": "5. As children, Jim Springer and Jim Lewis lived together.",
    "answer": "False (F) — خطأ",
    "explanation": "في النص: 'they didn't grow up together... met for the first time 39 years after they were born'."
  },
  {
    "type": "qa",
    "question": "6. Jim and Jim liked different things.",
    "answer": "False (F) — خطأ",
    "explanation": "في النص: 'Their likes and dislikes were the same'."
  },
  {
    "type": "qa",
    "question": "7. Appearance and personality are part of our identity.",
    "answer": "True (T) — صحيح",
    "explanation": "في النص: 'Our identity—our appearance and personality'."
  },
  {
    "type": "table",
    "title": "B. TALK ABOUT IT: تراكيب المقارنة وجدول الأنشطة",
    "headers": ["مجال المقارنة (Characteristic)", "The Same As (نفسه تماماً)", "Similar To (مشابه له)", "Different From (مختلف عنه)"],
    "rows": [
      ["Appearance (hair color, height, body)", "✓ (لون الشعر والطول متطابقان)", "—", "—"],
      ["Likes and Dislikes (sports, hobbies, movies, books, music)", "—", "✓ (الهوايات متقاربة)", "—"],
      ["Favorite Classes (math, English, science, history)", "—", "—", "✓ (المواد المفضلة مختلفة)"]
    ]
  },
  {
    "type": "callout",
    "variant": "exam_tip",
    "title": "قاعدة لغوية هامة من تمرين ص 4 (تراكيب المقارنة)",
    "content": "• The same as: نفس الشيء تماماً (Is your appearance the same as your brother's?). \n• Similar to: مشابه لـ (Are your likes similar to your sister's?). \n• Different from: مختلف عن (Are your classes different from your friend's?). \nتأتي هذه التراكيب دائماً في أسئلة اختر الإجابة الصحيحة لحروف الجر (as, to, from)."
  },

  // --- ص 5: المفردات التحضيرية واستراتيجية الشَرطة ---
  {
    "type": "h2",
    "prefix": "3.",
    "text": "التحضير للمفردات واستراتيجية الشَرطة (Vocabulary Preparation & Reading Strategy)"
  },
  {
    "type": "table",
    "title": "B. VOCABULARY PREPARATION: حل تمرين مطابقة المفردات مع الجمل",
    "headers": ["الرقم والجملة المقررة باللغة الإنكليزية", "الكلمة المحددة", "الرمز والتعريف المطابق", "الترجمة العربية للجملة"],
    "rows": [
      [
        "1. Jim went to college. Then he worked in a department store. It was a normal life.",
        "normal",
        "(e) not strange",
        "ذهب جيم للجامعة ثم عمل في متجر؛ كانت حياة عادية وغير غريبة."
      ],
      [
        "2. As a child, Ashley loved movies. As an adult, she still loved movies.",
        "adult",
        "(c) not a child; a person over 18",
        "عندما كانت طفلة أحبت الأفلام، وعندما أصبحت بالغة فوق 18 عاماً بقيت تحبها."
      ],
      [
        "3. You can be whatever you want to be.",
        "whatever",
        "(a) anything",
        "بمقدورك أن تكون أي شيء ترغب في أن تكونه."
      ],
      [
        "4. Blake started to design clothes. Now he has his own clothing business.",
        "design",
        "(f) plan and make",
        "بدأ بليك في تصميم الملابس (تخطيطها وصنعها)، والآن لديه شركته الخاصة."
      ],
      [
        "5. It's a movie about rich, upper-class people.",
        "upper-class",
        "(d) not poor / rich",
        "إنه فيلم يتناول حياة أثرياء الطبقة الراقية غير الفقراء."
      ],
      [
        "6. Josh is the hero of the movie.",
        "hero",
        "(g) star",
        "جوش هو بطل الفيلم ونجمه الرئيسي."
      ],
      [
        "7. Movies are a form of entertainment, like parties or TV or sports.",
        "entertainment",
        "(b) fun",
        "الأفلام شكل من أشكال التسلية والترفيه والمرح كالحفلات والرياضة."
      ]
    ]
  },
  {
    "type": "callout",
    "variant": "definition",
    "title": "Reading Strategy: Guessing the Meanings of New Words: Dashes",
    "content": "You don't always need a dictionary to guess the meaning of a new word. Sometimes you can know the meaning of the new word from the context. The context is the words around the word. Sometimes the meaning is after a dash (—). \nمثال المقرر: They looked identical—(exactly the same). \nالشرح: الكلمة أو العبارة التوضيحية تأتي مباشرة بعد الشَرطة (—)، فكلمة identical معناها الحرفي exactly the same."
  },

  // --- ص 6: النص القرائي الثاني: You Are the Star of Your Own Movie ---
  {
    "type": "h2",
    "prefix": "4.",
    "text": "النص القرائي الثاني: أنت نجم فيلمك الخاص (Reading: You Are the Star of Your Own Movie)"
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 1: Ralph Lauren's Life",
    "english": "Ralph Lifshitz was born in 1939. He grew up in the Bronx, New York, in a middle-class family—not poor, but not rich. After high school, he studied business at City College in New York. Then he worked in a department store. It was a normal life. But Ralph Lifshitz didn't want a normal life. As a child, he loved movies. As an adult, he still loved movies. He wanted to be like the actors. He learned something important in movie theaters: it's possible to 'be whatever you want to be.' At age 17, he changed his name to Ralph Lauren because Lauren is easier to pronounce and spell than Lifshitz. He began to design clothes: jeans and boots from cowboy movies and fine English suits from British movies about rich, upper-class people. He created his own company and became famous and successful. He became the hero of his own 'movie'—his life.",
    "arabic": "وُلد رالف ليفشيتز في عام 1939. ونشأ في حي برونكس بمدينة نيويورك، ضمن عائلة من الطبقة المتوسطة—ليست فقيرة ولكن ليست غنية. وبعد الثانوية، درس إدارة الأعمال في كلية سيتي كوليدج، ثم عمل في متجر متعدد الأقسام. لقد كانت حياة عادية، لكن رالف ليفشيتز لم يكن يرغب بحياة عادية! ففي طفولته عشق الأفلام، وعندما صار بالغاً ظل محباً لها، وتمنى لو يصبح مثل الممثلين. وتعلّم درساً قيّماً في دور السينما: أن بمقدورك أن 'تكون أي شيء ترغب فيه'. وفي سن السابعة عشرة، غيّر اسمه إلى 'رالف لورين' لأن لورين أسهل في النطق والتهجئة من ليفشيتز. وبدأ في تصميم الأزياء: سراويل الجينز وأحذية رعاة البقر، والبدلات الإنجليزية الأنيقة من الأفلام البريطانية عن الطبقة الأرستقراطية الثرية. أسس شركته الخاصة وغدا مشهوراً وناجحاً، وبات بحق بطل 'فيلمه' الخاص—الذي هو حياته.",
    "notes": "middle-class = not poor, but not rich. hero of his own movie = بطل فيلمه الخاص."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 2: Neal Gabler & Everyday Roles",
    "english": "Movies are big business. They are entertainment. But they are more than that. In his book Life: the Movie, Neal Gabler says movies change us in both small and big ways. Part of our identity—our idea of who we are—comes from movies. Movies teach us how to do things, how to be. The actor Elizabeth Taylor describes actors as 'shy'—a little nervous and afraid of people. But they learn to hide in their movie roles. They become different, not shy. In a similar way, Gabler says, all of us play roles in everyday life. We have many roles—as student, child, parent, friend, customer, worker.",
    "arabic": "إن صناعة الأفلام تجارة كبرى ووسيلة للترفيه، لكنها تتجاوز ذلك بكثير. ففي كتابه 'الحياة: الفيلم'، يوضح نيل غابلر أن الأفلام تغيرنا بطرق صغيرة وكبيرة معاً؛ إذ إن جزءاً من هويتنا—أي فكرتنا عن حقيقة أنفسنا—مشتق من الأفلام. فالأفلام تعلمنا كيف نتصرف وكيف نكون! وتصف الممثلة إليزابيث تايلور الممثلين بأنهم 'خجولون'—أي يشعرون ببعض التوتر والخوف من الناس، لكنهم يتعلمون الاختباء خلف أدوارهم التمثيلية، فيغدون أشخاصاً مختلفين غير خجولين. وبطريقة مماثلة، يؤكد غابلر أننا جميعاً نلعب أدواراً في حياتنا اليومية: كطالب، وابن، ووالد، وصديق، وزبون، وعامل.",
    "notes": "shy = a little nervous and afraid of people. identity = our idea of who we are."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 3: You Create The Movie",
    "english": "It's an interesting idea. Your own life is a movie, and you are the star. You don't only play the hero of your movie. You create the whole movie. You choose the costumes—the clothes. You choose the scenes—places to live, go to school, or take a vacation. You choose the other actors—your friends, for example. Maybe most important is the plot—the story. You are also the writer of your movie, and you can choose to change the plot!",
    "arabic": "إنها فكرة في غاية الروعة؛ فحياتك فيلم كامل وأنت نجمه اللامع! وأنت لا تكتفي بلعب دور البطل في هذا الفيلم فحسب، بل تصنع الفيلم بأكمله: تختار الأزياء—أي ثيابك، وتختار المشاهد—أماكن سكنك ودراستك وإجازتك، وتختار الممثلين الآخرين المشاركين معك—كأصدقائك مثلاً. ولعل العنصر الأكثر أهمية هو الحبكة الدرامية (the plot)—أي القصة ذاتها؛ فأنت مؤلف الفيلم وكاتبه، ولديك كامل الخيار في أن تغير مجرى الحبكة متى شئت!",
    "notes": "costumes = the clothes. plot = the story. You can choose to change the plot!"
  },

  // --- ص 7: تمارين الفكرة الرئيسية ومفردات النص الثاني ---
  {
    "type": "h2",
    "prefix": "5.",
    "text": "تمارين الفكرة الرئيسية وفحص المفردات (After Reading)"
  },
  {
    "type": "qa",
    "question": "A. MAIN IDEA: What is the main idea of the reading? (Hint: In this reading, it is near the end.)\n(A) Ralph Lauren changed his life because of movies.\n(B) Everyone has different roles in life.\n(C) Your life is similar to a movie, and you can change it.",
    "options": [
      "Ralph Lauren changed his life because of movies.",
      "Everyone has different roles in life.",
      "Your life is similar to a movie, and you can change it."
    ],
    "correctOptionIndex": 2,
    "answer": "الخيار (C): Your life is similar to a movie, and you can change it.",
    "explanation": "الفكرة الرئيسية للنص موجودة في نهاية الفقرة الأخيرة: حياتك تشبه الفيلم وبمقدورك ككاتب أن تغير مجرى حبكتها."
  },
  {
    "type": "table",
    "title": "B. VOCABULARY CHECK: حل تمرين إكمال الفراغات بكلمات الصندوق",
    "headers": ["رقم الجملة", "الجملة باللغة الإنكليزية مع الفراغ المحلول", "الكلمة المستخدمة", "الترجمة العربية للجملة"],
    "rows": [
      ["1", "Jenny was [shy] and a little afraid of people.", "shy (خجول)", "كانت جيني خجولة وتخاف قليلاً من مواجهة الناس."],
      ["2", "Peter comes from a [middle-class] family in a small town. His family is not rich or poor.", "middle-class (طبقة متوسطة)", "ينحدر بيتر من عائلة من الطبقة المتوسطة في بلدة صغيرة؛ عائلته ليست غنية وليست فقيرة."],
      ["3", "John Wayne often played the [role] of a cowboy in old movies.", "role (دور)", "غالباً ما لعب جون واين دور راعي البقر في الأفلام القديمة."],
      ["4", "Movies give us ideas about who we are. Neal Gabler thinks part of our [identity] comes from movies.", "identity (هوية)", "تمنحنا الأفلام أفكاراً عمن نكون؛ ويعتقد نيل غابلر أن جزءاً من هويتنا مشتق من السينما."],
      ["5", "The [costumes] in the movie were very beautiful long dresses and fine suits.", "costumes (أزياء وملابس)", "كانت الأزياء في الفيلم عبارة عن فساتين طويلة جميلة للغاية وبدلات فاخرة."],
      ["6", "In the [plot] of the movie, a young man goes to Miami and tries to become a firefighter.", "plot (حبكة القصة)", "في حبكة الفيلم، يذهب شاب إلى ميامي ويحاول أن يصبح رجل إطفاء."],
      ["7", "The [setting] of the movie is Hawaii.", "setting (مكان وزمان القصة)", "مكان أحداث الفيلم وبيئته هو جزر هاواي."]
    ]
  },

  // --- ص 8: أقسام الكلام واستراتيجية التفكير الناقد ---
  {
    "type": "h2",
    "prefix": "6.",
    "text": "استراتيجية أقسام الكلام وتطبيقاتها (Parts of Speech & Critical Thinking)"
  },
  {
    "type": "table",
    "title": "جدول أقسام الكلام الثلاثة المقررة (Understanding Parts of Speech)",
    "headers": ["القسم (Part of Speech)", "التعريف بالإنكليزية", "الترجمة", "أمثلة من المقرر"],
    "rows": [
      ["Noun (n.)", "is a person, place, or thing", "اسم (شخص، مكان، أو شيء)", "school, height, mirror, firefighter, identity, costume, plot"],
      ["Adjective (adj.)", "describes a noun", "صفة (تصف الاسم)", "different, favorite, similar, identical, shy, normal, middle-class"],
      ["Verb (v.)", "shows action", "فعل (يدل على حدث أو عمل)", "am/is/are, walks, notice, separated, design, inherit, change"]
    ]
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "أمثلة المقرر على تحديد أقسام الكلام داخل الجملة",
    "content": "• The boys [n.] lived [v.] in different [adj.] towns [n.]. \n• The brothers [n.] enjoy [v.] the same [adj.] beach [n.]."
  },
  {
    "type": "qa",
    "question": "C. WORKING WITH WORDS: تحديد قسم الكلام للكلمات السبع الواردة في تمرين ص 7",
    "answer": "1. shy -> Adjective (صفة) \n2. middle-class -> Adjective (صفة مركبة) \n3. role -> Noun (اسم) \n4. identity -> Noun (اسم) \n5. costumes -> Noun (اسم جمع) \n6. plot -> Noun (اسم) \n7. setting -> Noun (اسم)",
    "explanation": "هذا التمرين يربط بين حفظ المفردة ومعرفة موقعها الإعرابي وقسمها من الكلام (Noun أم Adjective أم Verb)."
  },
  {
    "type": "callout",
    "variant": "note",
    "title": "Critical Thinking Strategy: Applying Information",
    "content": "Students often need to apply information. For example, they read about a situation, and they think: 'What does this information mean to me? What is the connection between this situation and me?' \nالشرح: استراتيجية تطبيق المعلومات تعني ربط ما تقرأه بحياتك الشخصية والتساؤل عن صلة النص بتجاربك الخاصة."
  },

  // --- ص 9: تمرين C. VOCABULARY PREPARATION وجدول التفكير (الصورة التي أشار إليها المستخدم!) ---
  {
    "type": "h2",
    "prefix": "7.",
    "text": "التحضير لمفردات الوراثة واستراتيجية التعريف (Vocabulary Preparation C & Strategy) [مطلوب]"
  },
  {
    "type": "table",
    "title": "B. THINKING AHEAD: جدول سمات الشخصية ومصادرها",
    "headers": ["السمة الشخصية (Characteristics)", "النسبة من الوالدين عند الولادة (At birth, from parents)", "النسبة من تجارب الحياة (From life experience)"],
    "rows": [
      ["Appearance (المظهر الخارجي)", "80% (my looks, how tall I am)", "20% (my haircut, my clothes)"],
      ["Likes / Dislikes (ما نحبه وما نكرهه)", "40% (natural preferences)", "60% (friends, culture, hobbies)"],
      ["Favorite Subjects in School (المواد المفضلة)", "30% (innate abilities)", "70% (teachers, study, practice)"],
      ["Choice of Profession / Job (المهنة المستقبلية)", "20% (family influence)", "80% (education, career goals)"],
      ["Personality (الشخصية والطباع العامة)", "50% (nature / genes)", "50% (nurture / environment)"]
    ]
  },
  {
    "type": "table",
    "title": "C. VOCABULARY PREPARATION: حل تمرين المفردات المؤشر عليه بـ (مطلوب)",
    "headers": ["الرقم والجملة المقررة باللغة الإنكليزية", "الكلمة الزرقاء", "الحل والتعريف المطابق", "الترجمة العربية التامة"],
    "rows": [
      [
        "1. We inherit genes from our parents. We have them before we are born.",
        "inherit (يرث)",
        "(b) receive (يتلقى/يأخذ من الوالدين)",
        "نحن نرث الجينات من آبائنا؛ فنحن نملكها قبل أن نولد."
      ],
      [
        "2. Genes determine hair color, eye color, height, and much more.",
        "determine (يحدد/يقرر)",
        "(a) decide (يقرر ويحدد بدقة)",
        "تحدد الجينات لون الشعر ولون العينين والطول وأكثر من ذلك بكثير."
      ],
      [
        "3. Non-identical twins share only 50 percent of their genes. Identical twins have all of the same genes.",
        "share (يتشارك)",
        "(c) have the same (يمتلك نفس الشيء)",
        "التوائم غير المتطابقة تتشارك 50 بالمئة فقط من جيناتها، بينما التوائم المتطابقة تملك نفس الجينات تماماً."
      ]
    ]
  },
  {
    "type": "callout",
    "variant": "definition",
    "title": "Reading Strategy: Guessing the Meanings of New Words: Definitions",
    "content": "You don't always need a dictionary to guess the meaning of a new word. Sometimes there is a complete definition of the word within the reading. Look for definitions after (is), (are), or (means). \n• مثال المقرر: Nature is (biology, genes, or DNA). \n• D. PRACTICE: As you read, look for a definition of nurture. \n• الحل من النص: Nurture means (life experience and environment)."
  },

  // --- ص 10-11: النص القرائي الثالث: Nature vs Nurture ---
  {
    "type": "h2",
    "prefix": "8.",
    "text": "النص القرائي الثالث: الطبيعة والتنشئة (Reading: Nature or Nurture?)"
  },
  {
    "type": "bilingual",
    "badge": "Reading 3 — Part 1: Nature or Nurture?",
    "english": "You have your mother's eyes and your father's ears. Your sister has your mother's hair color and your father's nose. You both have your father's mouth. We all inherit these characteristics from our parents. But what about personality? What if one child is shy and another is energetic? What if one is good at music and the other is good at sports? Where do these characteristics come from? It's an old question: What makes us the people we are? Which is more important, nature or nurture? Nature is genes or DNA—biology. We receive these genes from our parents at birth. Genes determine hair color, eye color, height, and much more. Nurture means life experience and environment. Education, family, friends, books, movies, and culture are all part of nurture.",
    "arabic": "أنت تملك عيني والدتك وأذني والدك، وشقيقتك تملك لون شعر والدتك وأنف والدك، وكلاكما تملكان فم والدكم. كلنا نرث هذه الخصائص الجسدية من آبائنا. ولكن ماذا عن الشخصية والطباع؟ ماذا لو كان أحد الأبناء خجولاً والآخر مفعماً بالطاقة والنشاط؟ ماذا لو كان أحدهما بارعاً في الموسيقى والآخر متميزاً في الرياضة؟ من أين تأتي هذه السمات؟ إنه السؤال القديم: ما الذي يجعلنا الأشخاص الذين نحن عليهم؟ وأيهما أكثر أهمية وتأثيراً: الطبيعة (Nature) أم التنشئة (Nurture)؟ الطبيعة هي الجينات أو الحمض النووي (DNA)—أي البيولوجيا والوراثة التي نتلقاها من والدينا عند الولادة؛ فالجينات تحدد لون الشعر ولون العينين والطول وغير ذلك الكثير. أما التنشئة فتعني خبرة الحياة والبيئة المحيطة؛ فالتعليم والأسرة والأصدقاء والكتب والأفلام والثقافة كلها جزء من التنشئة.",
    "notes": "Nature = genes, DNA, biology. Nurture = life experience and environment."
  },
  {
    "type": "bilingual",
    "badge": "Reading 3 — Part 2: Twin Studies & Gene Numbers",
    "english": "Scientists study both identical and non-identical twins. Identical twins have the same genes. Non-identical twins share only 50 percent of their genes. When twins grow up together (as they usually do) in the same home, their environment is similar. But sometimes they are separated. They grow up in different homes and have different environments (nurture). Genes determine characteristics such as eye color. We already know this. But scientists now know that genes—nature—also influence personality. Identity is not simple. There isn't just one gene for every personality characteristic. For example, there isn't one gene for shyness, one for intelligence, one for happiness. Many genes together form a characteristic like being happy. Each person has only 30,000 genes. That doesn't seem like many! But think of this: The alphabet has only 26 letters (A-Z). These 26 letters can form a simple sentence ('Remember to call John') or a work by Shakespeare, the famous English writer. The number of genes isn't important. However, the combination of genes—how they are put together—is important.",
    "arabic": "يدرس العلماء كلاً من التوائم المتطابقة وغير المتطابقة. التوائم المتطابقة تحمل نفس الجينات بنسبة 100%، في حين تشترك التوائم غير المتطابقة في 50% فقط من جيناتها. وعندما ينشأ التوأمان معاً في نفس المنزل، تكون بيئتهما متشابهة، لكنهما يفترقان أحياناً وينشآن في بيئات مختلفة (تنشئة مختلفة). نحن نعلم أن الجينات تقرر لون العيون، لكن العلماء يعلمون اليوم أن الجينات تؤثر أيضاً في الشخصية. فالهوية ليست بسيطة؛ إذ لا يوجد جين واحد لكل سمة نفسية—فلا يوجد جين بمفرده للخجل أو للذكاء أو للسعادة، بل تشترك عدة جينات معاً لتكوين السمة. ويمتلك كل إنسان 30 ألف جين فقط، وقد لا يبدو ذلك كثيراً! لكن تذكر أن الأبجدية تضم 26 حرفاً فقط، ومع ذلك تصنع جملة بسيطة أو تصوغ روائع الكاتب الإنجليزي الشهير شكسبير! إذن عدد الجينات ليس هو المهم، بل طريقة توافقها وتشابكها معاً (combination).",
    "notes": "الإنسان يملك 30,000 جين فقط تشبه 26 حرفاً تصنع روائع شكسبير."
  },
  {
    "type": "bilingual",
    "badge": "Reading 3 — Part 3: Birth Order & Stanford Study",
    "english": "What About Nurture? There is good news: genes don't determine everything. Your environment is important, too. The people around you, school, experiences, and even birth order are all part of this environment. For example, you may have 'musical genes,' but you probably cannot play the piano without lessons. Are you the first child in your family? Second? Third? Are you the only child? This birth order is part of your environment. A new study from Stanford University shows us something interesting. Birth order has an influence on personality. The oldest (first) child is usually a careful, hard worker and often a leader. The middle child is usually friendly and loves to be with other people. The youngest (last) child likes to create new things. A child without brothers or sisters often likes to be with adults, not just children. Nature determines about 50 percent of the person you are. Nurture determines the other 50 percent. One scientist talks about the 'dance' between nature and nurture. Everything begins with nature. But experience and education—nurture—'turn on' genes (like a radio!). Then genes lead you to look for certain experiences. Together, both nature and nurture make you the person you are.",
    "arabic": "وماذا عن التنشئة؟ هناك أخبار سارة: فالجينات لا تقرر كل شيء بمفردها؛ فبيئتك مهمة أيضاً، والناس من حولك والمدرسة والخبرات وحتى ترتيب ولادتك في العائلة كلها جزء من البيئة. فقد تمتلك 'جينات موسيقية'، لكنك لن تعزف على البيانو دون دروس! هل أنت الطفل الأول؟ الثاني؟ الثالث؟ أم أنت طفل وحيد؟ ترتيب الولادة جزء من بيئتك؛ حيث أظهرت دراسة جديدة من جامعة ستانفورد أن ترتيب الولادة يؤثر على الشخصية: فالطفل الأكبر (البكر) عادةً ما يكون حذراً ومجتهداً وقائداً؛ والطفل الأوسط ودود ويحب مخالطة الناس؛ والطفل الأصغر يحب ابتكار أشياء جديدة؛ والطفل الوحيد يفضل مجالسة البالغين. وخلاصة الأمر: الطبيعة تحدد نحو 50% من شخصيتك، والتنشئة تحدد الـ 50% الأخرى. ويشبه أحد العلماء ذلك بأنه 'رقصة' بين الطبيعة والتنشئة؛ فكل شيء يبدأ بالطبيعة، لكن الخبرة والتعليم يفعلان الجينات (مثل تشغيل المذياع!)، وكلاهما معاً يصنعان هويتك.",
    "notes": "النسبة المقررة: 50% طبيعة و 50% تنشئة."
  },
  {
    "type": "qa",
    "question": "A. MAIN IDEA:\n1. Is the main idea sentence at the beginning or the end?\n2. Write the sentence that gives the main idea.",
    "answer": "1. At the end (في نهاية النص). \n2. The sentence is: 'Together, both nature and nurture make you the person you are.'",
    "explanation": "الجملة التي تلخص فكرة النص كاملة هي الجملة الختامية: معاً، الطبيعة والتنشئة هما اللتان تجعلانك الشخص الذي أنت عليه."
  },

  // --- ص 12: تمارين التفاصيل والمناقشة ---
  {
    "type": "h2",
    "prefix": "9.",
    "text": "تمارين بعد القراءة: تفاصيل النص والمناقشة (After Reading)"
  },
  {
    "type": "qa",
    "question": "B. FINDING DETAILS (Which sentences are true? Which sentences are false? Fill in T or F):\n1. Characteristics such as eye color, ears, and hair color come 50 percent from nature and 50 percent from nurture.",
    "answer": "False (F) — خطأ",
    "explanation": "الملامح الجسدية (العينين والشعر والأذن) تأتي بنسبة 100% من الطبيعة والوراثة، أما نسبة 50/50 فهي للشخصية."
  },
  {
    "type": "qa",
    "question": "2. Nurture means life experience and environment.",
    "answer": "True (T) — صحيح",
    "explanation": "في النص: 'Nurture means life experience and environment'."
  },
  {
    "type": "qa",
    "question": "3. Nature does not influence personality.",
    "answer": "False (F) — خطأ",
    "explanation": "في النص: 'scientists now know that genes—nature—also influence personality'."
  },
  {
    "type": "qa",
    "question": "4. Many genes together probably form a characteristic.",
    "answer": "True (T) — صحيح",
    "explanation": "في النص: 'Many genes together form a characteristic like being happy'."
  },
  {
    "type": "qa",
    "question": "5. Birth order influences personality.",
    "answer": "True (T) — صحيح",
    "explanation": "أكدت دراسة جامعة ستانفورد أن ترتيب الولادة في الأسرة يؤثر مباشرة على الشخصية."
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "C. DISCUSSION & D. JOURNAL WRITING: مواضيع النقاش والتعبير",
    "content": "مواضيع التعبير المقررة في الكتاب: \n1. Twins (التوائم) \n2. Changing your life (تغيير مجرى حياتك) \n3. Your position in the family (ترتيبك وموقعك في العائلة) \n4. One of your personal characteristics (إحدى سماتك الشخصية) \n5. An important influence on your life (شخصية أو تجربة أثرت في حياتك)."
  },

  // --- ص 13-14: قواعد الحاضر البسيط وتمارينه ---
  {
    "type": "h2",
    "prefix": "10.",
    "text": "قواعد زمن الحاضر البسيط وتمارينه (The Simple Present Tense)"
  },
  {
    "type": "callout",
    "variant": "important",
    "title": "قاعدة الحاضر البسيط واستخداماته المقررة",
    "content": "Use the simple present tense for: \n1. General or permanent situations (مواقف عامة أو دائمة). \n2. Repeated actions (أفعال متكررة وعادات). \n• نضيف (s/es) للفعل مع الفاعل المفرد الغائب (Jim, he, she, it). \n• الأفعال الشاذة: be تصبح (am, is, are)، و have تصبح (have, has). \n• النفي: نضيف do/does + not متبوعاً بالمصدر المجرد: don't share, doesn't have."
  },
  {
    "type": "table",
    "title": "A. SPELLING: حل تمرين إضافة -s للمفرد الغائب للأفعال العشرة",
    "headers": ["الرقم", "الفعل المجرد", "التصريف مع المفرد الغائب (-s form)", "الرقم", "الفعل المجرد", "التصريف مع المفرد الغائب (-s form)"],
    "rows": [
      ["1", "chase", "chases", "6", "wish", "wishes"],
      ["2", "enjoy", "enjoys", "7", "grow", "grows"],
      ["3", "teach", "teaches", "8", "do", "does"],
      ["4", "learn", "learns", "9", "dance", "dances"],
      ["5", "play", "plays", "10", "watch", "watches"]
    ]
  },
  {
    "type": "callout",
    "variant": "exam_tip",
    "title": "B. PRACTICE: حل تمرين فقرة الأخوات كيم وستايسي بالحاضر البسيط كاملاً",
    "content": "Kim and Stacy [are] (be) non-identical twin sisters. They [look] (look) similar, but they [have] (have) very different interests. Kim [likes] (like) sports. She [runs] (run) almost every day. On weekends, she [plays] (play) tennis or [goes] (go) swimming. Stacy [does not like] (not like) sports. She [stays] (stay) up late and [watches] (watch) old movies on TV. On weekends, she [teaches] (teach) dancing to children. The sisters also [have] (have) different personalities. Kim [is] (be) outgoing and energetic. Stacy [is] (be) careful and a little shy. But they [share] (share) one characteristic: they both [are] (be) often very happy."
  },

  // --- ص 14-15: قواعد الماضي البسيط وتمارينه ---
  {
    "type": "h2",
    "prefix": "11.",
    "text": "قواعد زمن الماضي البسيط وتمارينه (The Simple Past Tense)"
  },
  {
    "type": "callout",
    "variant": "important",
    "title": "قاعدة زمن الماضي البسيط",
    "content": "Use the simple past tense for an action that started and ended before now. \n• الأفعال النظامية: نضيف -ed إلى المصدر (worked, changed). \n• الأفعال الشاذة: تحفظ غيباً (met, became, gave, was, were). \n• النفي: نستخدم did not (didn't) متبوعاً بمصدر الفعل المجرد: She didn't have a brother."
  },
  {
    "type": "callout",
    "variant": "exam_tip",
    "title": "C. PRACTICE: حل تمرين فقرة الأخ الأكبر بالماضي البسيط كاملاً",
    "content": "My big brother [was] (be) an important influence on me as a small child. I [followed] (follow) him everywhere. I [did] (do) whatever he [did] (do). He [joined] (join) the high school baseball team, so I [played] (play) baseball with the kids at my school. One year, he [wore] (wear) cowboy boots, so I [wanted] (want) the same boots. He [read] (read) books, so I [tried] (try) to read the same books. I probably [bothered] (bother) him a lot, but he [did not get] (not get) angry with me. When he [left] (leave) for college, he [gave] (give) me his baseball glove. He [was] (be) my hero."
  },

  // --- ص 15-16: علامات الترقيم مع And والتمارين العشرة ---
  {
    "type": "h2",
    "prefix": "12.",
    "text": "علامات الترقيم مع أداة الربط And وحل الجمل العشرة (Punctuation with 'And')"
  },
  {
    "type": "table",
    "title": "قاعدة الفاصلة مع And",
    "headers": ["الحالة", "القاعدة", "أمثلة المقرر"],
    "rows": [
      ["عطف كلمتين أو عنصرين", "لا نضع أي فاصلة (no comma)", "He became rich and successful. / Mark and Gerald are twins."],
      ["عطف جملتين مستقلتين كاملتين", "نضع فاصلة قبل and (comma before and)", "Ralph changed his name, and he began to design clothes."],
      ["سلسلة من ثلاثة عناصر أو أكثر", "نضع فاصلة بعد كل عنصر وقبل and", "She's a wife, mother, and friend."]
    ]
  },
  {
    "type": "table",
    "title": "D. PRACTICE: حل تمرين دمج الجمل العشرة باستخدام And وعلامات الترقيم",
    "headers": ["رقم الجملة", "الجملتان الأصليتان في الكتاب", "الجملة بعد الدمج بـ And مع الترقيم الصحيح", "التعليل"],
    "rows": [
      ["1", "I like baseball. I like wrestling.", "I like baseball and wrestling.", "عطف مفعولين به لا يحتاج فاصلة."],
      ["2", "Nature is important. Nurture is important.", "Nature is important, and nurture is important.", "جملتان كاملتان فتحتاج فاصلة قبل and."],
      ["3", "Ralph designed jeans. He designed boots. He designed suits.", "Ralph designed jeans, boots, and suits.", "سلسلة من ثلاثة عناصر فتحتاج فواصل."],
      ["4", "Education is part of nurture. Family is part of nurture. Culture is part of nurture.", "Education, family, and culture are part of nurture.", "سلسلة من ثلاثة أسماء فاعل."],
      ["5", "My brother played baseball. My sister played soccer.", "My brother played baseball, and my sister played soccer.", "جملتان كاملتان مختلفتان بالفاعل."],
      ["6", "I went to the movies. I liked the movie.", "I went to the movies, and I liked the movie.", "جملتان كاملتان."],
      ["7", "Mary and Kim are the same height. They are the same weight. They have the same hair color.", "Mary and Kim are the same height, the same weight, and they have the same hair color.", "سلسلة صفات."],
      ["8", "Mike and John grew up in different towns. They went to different schools.", "Mike and John grew up in different towns, and they went to different schools.", "جملتان كاملتان."],
      ["9", "Jessie is shy. She is musical. She is intelligent.", "Jessie is shy, musical, and intelligent.", "سلسلة من 3 صفات."],
      ["10", "One sister is a teacher. The other sister is a designer.", "One sister is a teacher, and the other sister is a designer.", "جملتان كاملتان."]
    ]
  },

  // --- ص 16-17: حروف الجر التلازمية والتمارين العشرة وتصحيح الفقرة ---
  {
    "type": "h2",
    "prefix": "13.",
    "text": "حروف الجر التلازمية وتصحيح أخطاء الفقرة (Words in Phrases: Prepositions & Editing)"
  },
  {
    "type": "table",
    "title": "E. PRACTICE: حل تمرين حروف الجر وتحديد أقسام الكلام للجمل العشرة",
    "headers": ["الرقم", "الجملة المقررة في الكتاب", "حرف الجر", "الكلمة قبله وقسم كلامها", "الترجمة العربية"],
    "rows": [
      ["1", "My grandmother was an important influence on me.", "on", "influence (Noun - اسم)", "كانت جدتي ذات تأثير كبير عليّ."],
      ["2", "Jill is interested in costume design.", "in", "interested (Adjective - صفة)", "جيل مهتمة بتصميم الأزياء."],
      ["3", "I'm very different from my sister.", "from", "different (Adjective - صفة)", "أنا مختلف تماماً عن أختي."],
      ["4", "Kirk's not very similar to his brother.", "to", "similar (Adjective - صفة)", "كيرك ليس مشابهاً جداً لأخيه."],
      ["5", "Harrison Ford is the hero of that action movie.", "of", "hero (Noun - اسم)", "هاريسون فورد هو بطل فيلم الأكشن ذاك."],
      ["6", "Movies are a form of entertainment.", "of", "form (Noun - اسم)", "الأفلام شكل من أشكال الترفيه."],
      ["7", "A combination of nature and nurture makes us the people we are.", "of", "combination (Noun - اسم)", "مزيج من الطبيعة والتنشئة يصنع هويتنا."],
      ["8", "The small child was a little afraid of people.", "of", "afraid (Adjective - صفة)", "كان الطفل الصغير خائفاً قليلاً من الناس."],
      ["9", "Laura told stories about her trips.", "about", "stories (Noun - اسم)", "روت لورا قصصاً عن رحلاتها."],
      ["10", "Ben and Shelly talked about the importance of both nature and nurture.", "about / of", "talked (Verb) / importance (Noun)", "تحدث بين وشيلي عن أهمية الطبيعة والتنشئة."]
    ]
  },
  {
    "type": "qa",
    "question": "F. REVIEW: تصحيح الأخطاء السبعة الشائعة في فقرة أودري هيبورن",
    "answer": "الفقرة بعد التصحيح التام: \n'The actress Audrey Hepburn was an influence [ON] me as a child. I loved her old movies. She seemed very different [FROM] people in my life. She was beautiful [AND] elegant. She [HAD] a wonderful accent. After I [SAW] her in one movie, I wanted my hair and clothes to be similar [TO] hers. She was a lovely lady[,] and I wanted to be like her.'",
    "explanation": "الأخطاء السبعة: \n1. influence of -> influence on (حرف جر خاطئ). \n2. different of -> different from (حرف جر خاطئ). \n3. beautiful, and -> beautiful and (حذف الفاصلة بين صفتين). \n4. have -> had (تصحيح الفعل للماضي). \n5. see -> saw (تصحيح الفعل للماضي). \n6. similar hers -> similar to hers (إضافة حرف الجر to). \n7. lady and I -> lady, and I (إضافة فاصلة لوجود جملتين كاملتين مستقلتين)."
  },

  // ===========================================================================
  // CHAPTER 2: PERSONALITY AND LEARNING (الصفحات 18 إلى 25)
  // ===========================================================================
  {
    "type": "h1",
    "text": "الفصل الثاني: الشخصية والتعلّم (Chapter 2: Personality and Learning)",
    "badge": "الوحدة 2"
  },

  // --- ص 18: المهن والتخصصات الجامعية ---
  {
    "type": "h2",
    "prefix": "14.",
    "text": "التخصصات الجامعية والمهن المقابلة (Know Yourself: Majors & Careers)"
  },
  {
    "type": "table",
    "title": "A. THINKING AHEAD: حل تمرين مطابقة التخصصات بالمهن",
    "headers": ["الرقم", "التخصص الجامعي (Major)", "الرمز", "المهنة المقابلة (Career)", "الترجمة العربية"],
    "rows": [
      ["1", "biology", "(b)", "biologist", "علم الأحياء -> عالم أحياء"],
      ["2", "business", "(c)", "businessperson", "إدارة الأعمال -> رجل/سيدة أعمال"],
      ["3", "chemistry", "(g)", "chemist", "الكيمياء -> كيميائي / صيدلي"],
      ["4", "engineering", "(e)", "engineer", "الهندسة -> مهندس"],
      ["5", "medicine", "(d)", "doctor", "الطب البشري -> طبيب"],
      ["6", "music", "(f)", "musician", "الموسيقى -> موسيقار / عازف"],
      ["7", "theater arts", "(a)", "actor", "فنون المسرح -> ممثل"]
    ]
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "ملاحظة لغوية حول كلمة College في أمريكا",
    "content": "Americans usually use the word 'college' to mean higher education in general. It can mean college or university. \nفي الولايات المتحدة تُطلق كلمة College للإشارة إلى التعليم العالي عموماً وتشمل الكلية أو الجامعة."
  },

  // --- ص 19: مفردات المقابلة واستراتيجية السياق ---
  {
    "type": "h2",
    "prefix": "15.",
    "text": "مفردات المقابلة واستراتيجية الاستماع من السياق (Vocabulary Preparation C & Strategy)"
  },
  {
    "type": "table",
    "title": "C. VOCABULARY PREPARATION: حل تمرين مفردات المقابلة الخمسة",
    "headers": ["الرقم", "الجملة المقررة في الكتاب", "الكلمة الزرقاء", "الحل والتعريف المطابق", "الترجمة"],
    "rows": [
      [
        "1",
        "A: What are your plans? B: It depends. I don't know. I may stay home. I may go to the beach.",
        "depends",
        "(e) it is not certain yet",
        "يعتمد على الظروف / ليس مؤكداً بعد."
      ],
      [
        "2",
        "I have too much work right now. I need to find a way to reduce how many hours I work.",
        "reduce",
        "(c) make less or smaller",
        "يقلل أو يخفض ساعات العمل."
      ],
      [
        "3",
        "Olivia has problems with money, work, school, and her boyfriend. All of these problems are causing her a lot of anxiety.",
        "anxiety",
        "(d) feeling of fear or worry",
        "القلق والتوتر النفسي."
      ],
      [
        "4",
        "Joel is a very calm person. I think it's because he sits quietly and meditates every morning.",
        "calm / meditates",
        "(a) peaceful / (f) sits quietly and focuses the mind",
        "هادئ ومسالم / يتأمل بهدوء في الصباح."
      ],
      [
        "5",
        "A: Do you play tennis regularly? B: Yes, we meet every Monday and Wednesday for a couple of games.",
        "regularly",
        "(b) at regular times",
        "بانتظام ودورية متكررة."
      ]
    ]
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "Listening Strategy: Guessing the Meaning from Context",
    "content": "عند الاستماع، لا يمكنك فتح القاموس أثناء المحادثة، لذلك خمن المعنى من السياق بطريقتين: \n1. Listen for the words you know (استمع للكلمات المألوفة والتوضيحات اللاحقة). \n2. Watch the speaker's body language (راقب لغة الجسد وحركات اليدين)."
  },

  // --- ص 20: نغمة الصوت في الأسئلة وقاعدة Like مقابل Enjoy ---
  {
    "type": "h2",
    "prefix": "16.",
    "text": "نغمة الأسئلة وقاعدة Like مقابل Enjoy (Intonation & Words in Phrases)"
  },
  {
    "type": "callout",
    "variant": "important",
    "title": "Intonation in Yes/No Questions: نبرة الصوت في الأسئلة المغلقة",
    "content": "When you ask a yes/no question, your voice goes up at the end (نبرة صوت صاعدة). \nتدريب الأسئلة الثمانية المقررة: \n1. Are you a student here? ↗ \n2. Do you know what your major will be? ↗ \n3. Can I ask you something? ↗ \n4. Do you enjoy hiking? ↗ \n5. Are you stressed? ↗ \n6. Do you like to work in the garden? ↗ \n7. Are you majoring in business? ↗ \n8. Do you have a job? ↗"
  },
  {
    "type": "table",
    "title": "القاعدة الامتحانية الذهبية: الفرق بين الفعلين Like و Enjoy",
    "headers": ["الفعل", "ما يقبله بعده في الجملة", "أمثلة المقرر", "ملاحظات هامة جداً"],
    "rows": [
      [
        "Like",
        "1. Noun (اسم) \n2. Gerund (فعل + ing) \n3. Infinitive (to + verb)",
        "• I like music. [Noun] \n• I like listening to music. [Gerund] \n• I like to listen to music. [Infinitive]",
        "يقبل الحالات الثلاث دون استثناء."
      ],
      [
        "Enjoy",
        "1. Noun (اسم) \n2. Gerund (فعل + ing)",
        "• I enjoy movies. [Noun] \n• I enjoy going to the movies. [Gerund]",
        "⚠️ يُمنع منعاً باتاً استخدام (to + verb) بعد enjoy! (خطأ فادح امتحاني: I enjoy to go)."
      ]
    ]
  },

  // --- ص 21: الأشكال المختصرة للكلمات وطلب التوضيح ---
  {
    "type": "h2",
    "prefix": "17.",
    "text": "الأشكال المختصرة للكلمات وطلب التوضيح (Reduced Forms & Clarification)"
  },
  {
    "type": "table",
    "title": "جدول الأشكال المختصرة للكلمات في المحادثة السريعة",
    "headers": ["الشكل الكامل (Long Form)", "الشكل المختصر الشفهي (Reduced Form)", "المعنى باللغة العربية"],
    "rows": [
      ["because", "cuz", "بسبب / لأن"],
      ["Excuse me.", "'Suse me.", "عذراً / المعذرة"],
      ["I don't know.", "I dunno.", "لا أعلم / لست أدري"],
      ["What's your name?", "Whatcher name?", "ما اسمك؟"],
      ["What do you do?", "Whadaya do?", "ماذا تعمل؟ / ما مهنتك؟"],
      ["How do you spell that?", "Howdaya spell that?", "كيف تتهجى ذلك؟"],
      ["Could you repeat that?", "Cudja repeat that?", "هل يمكنك إعادة ذلك؟"]
    ]
  },
  {
    "type": "qa",
    "question": "C. REDUCED FORMS OF WORDS: كتابة الأشكال الكاملة للحوارين",
    "answer": "Conversation 1: \nA: [What is your name?] \nB: Sarah. \nA: [How do you spell that?] \nB: S-A-R-A-H. \nA: [Could you repeat that?] \n\nConversation 2: \nA: May I ask you something? \nB: [It depends.] \nA: [What do you do] about stress? \nB: I try to exercise every day.",
    "explanation": "هذا التمرين يدرب الطالب على تحويل الأشكال المنطوقة المختصرة إلى كتابة قواعدية سليمة."
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "Critical Thinking Strategy: Asking for Clarification",
    "content": "عبارات طلب التوضيح المعتمدة: \n• Excuse me? / Sorry? \n• Could you repeat that? \n• What was that again? \n• Sorry, I didn't understand that. \n• How do you spell that? \n• What does that mean?"
  },

  // --- ص 22: طلب وإعطاء الإذن ---
  {
    "type": "h2",
    "prefix": "18.",
    "text": "طلب التوضيح في المواقف، وطلب وإعطاء الإذن (Clarification & Permission)"
  },
  {
    "type": "table",
    "title": "D. ASKING FOR CLARIFICATION: العبارة المناسبة لكل موقف",
    "headers": ["الموقف الحياتي في التمرين", "العبارة المناسبة لطلب التوضيح"],
    "rows": [
      ["1. You didn't understand because she was speaking quietly.", "Could you repeat that? / What was that again? (بصوت أعلى)"],
      ["2. You didn't hear because you weren't listening carefully.", "Sorry? / Excuse me? Could you say that again?"],
      ["3. You heard the person but didn't understand one word.", "What does that mean?"],
      ["4. You heard the person, but need to see the word in writing.", "How do you spell that?"]
    ]
  },
  {
    "type": "table",
    "title": "Language Function: Asking For and Giving Permission",
    "headers": ["أسلوب الطلب (Begin with)", "الرد بالموافقة (Yes)", "الرد بالتردد أو التفكير", "الرد بالرفض اللبق (No)"],
    "rows": [
      [
        "• May I borrow your pencil? \n• Can I close the door? \n• Could I see your class notes?",
        "• Sure. \n• Yes. \n• Yeah. (= yes)",
        "• Um, I don't know. \n• Um, I'm not sure. \n• Uh, it depends.",
        "• Sorry, no. \n• No. \n• Nope. (= no)"
      ]
    ]
  },

  // --- ص 23: مفردات التوتر وأعراضه ---
  {
    "type": "h2",
    "prefix": "19.",
    "text": "مفردات المقابلة الإذاعية والآثار الجسدية للتوتر (Stress & Vocabulary)"
  },
  {
    "type": "table",
    "title": "B. VOCABULARY PREPARATION: حل تمرين مفردات التوتر الـ 11 كاملاً",
    "headers": ["الرقم", "العبارة المقررة في الكتاب", "المعنى الإنجليزي المطابق", "الترجمة العربية"],
    "rows": [
      ["1", "My hands begin to shake and sweat.", "shake and sweat", "ترجف يداي وتعرقان."],
      ["2", "What are the physical effects of stress?", "physical effects on the body", "الآثار الجسدية والفسيولوجية للتوتر."],
      ["3", "I asked Tom a question, but he didn't respond.", "respond = answer", "سألت توم لكنه لم يُجب."],
      ["4", "My parents are putting pressure on me to study hard.", "putting pressure on = strong demand", "يضغط والداي عليّ لأدرس بجد."],
      ["5", "I can't find the answer. My brain doesn't seem to be working!", "brain = organ of body in your head", "لا أجد الإجابة، يبدو أن دماغي لا يعمل!"],
      ["6", "There is too much new information! I can't take it all in.", "take in = understand / absorb", "معلومات كثيرة جداً، لا أستطيع استيعابها."],
      ["7", "We need to deal with it, and fix it before it gets worse.", "deal with / fix = take care of it", "علينا التعامل مع المشكلة وحلها قبل أن تتفاقم."],
      ["8", "How is Roger coping with his problem?", "coping = dealing successfully with difficulty", "كيف يتأقلم روجر مع مشكلته بنجاح؟"],
      ["9", "It was a terrible situation, but he got through it.", "got through = survived / handled", "كان موقفاً عصيباً لكنه تجاوزه بنجاح."],
      ["10", "I'm so worried about the exam. It crowds everything else out.", "crowds out = takes all space in mind", "أنا قلق جداً لدرجة أن الامتحان طرد كل فكرة أخرى."],
      ["11", "One good tip is to make a list of interests and abilities.", "tip = suggestion / advice", "نصيحة جيدة ومفيدة."]
    ]
  },
  {
    "type": "qa",
    "question": "A & B. LISTENING FOR DETAILS: ما هي الأعراض الجسدية للتوتر الواردة في الاستماع؟",
    "answer": "الأعراض الأربعة المحددة في التمرين: \n1. makes us anxious (يجعلنا قلقين). \n2. our heart beat faster (يجعل دقات قلبنا تتسارع). \n3. our hands shake (يجعل أيدينا ترجف). \n4. our hands sweat (يجعل أيدينا تعرق).",
    "explanation": "السؤال يطلب وضع إشارة (✓) على الأعراض الأربعة التي يسببها التوتر."
  },

  // --- ص 24: نصائح التفوق وإعطاء النصيحة ---
  {
    "type": "h2",
    "prefix": "20.",
    "text": "نصائح التفوق الدراسي واستراتيجية تقديم النصيحة والتوضيح (Study Advice & Strategies)"
  },
  {
    "type": "qa",
    "question": "What advice does the speaker give students? (ما هي النصائح التي يقدمها المتحدث للطلاب؟)",
    "answer": "النصائح الصحيحة في التمرين: \n• Study better (الدراسة بأسلوب أفضل وليس مجرد جهد أكبر Study harder). \n• Ask questions (طرح الأسئلة وعدم الخوف منها). \n• Be well organized (التنظيم الجيد). \n• Use time wisely (استثمار الوقت بحكمة). \n• Learn to relax (تعلم الاسترخاء). \n• Work with other students (الدراسة الجماعية مع الزملاء).",
    "explanation": "يركز الخبير على الدراسة الذكية (Study better) بدلاً من الإرهاق العشوائي."
  },
  {
    "type": "callout",
    "variant": "definition",
    "title": "Speaking Strategies: Giving Advice & Clarifying",
    "content": "• Giving Advice (تقديم النصيحة): باستخدام should أو shouldn't: \n- You shouldn't study harder. You should study better. \n- You shouldn't be afraid to ask questions. You should ask a lot of them. \n\n• Clarifying (توضيح القصد): باستخدام عبارة (I mean...): \n- A: How can students be better students? \n- B: Excuse me? \n- A: I mean, what are some good study techniques? What can you suggest?"
  },

  // --- ص 25: مباني الجامعة وقصة كاسي وتقديم الاقتراحات ---
  {
    "type": "h2",
    "prefix": "21.",
    "text": "مباني الجامعة وقصة كاسي والإرشاد الأكاديمي (Campus Buildings & Cassie's Story)"
  },
  {
    "type": "table",
    "title": "B. LISTENING FOR DETAILS: مباني الحرم الجامعي والمقررات التابعة لها",
    "headers": ["المبنى الجامعي (Building)", "المقررات والعلوم التابعة له في التمرين (Classes)"],
    "rows": [
      ["1. Social Science Building", "psychology, sociology, anthropology (علم النفس، علم الاجتماع، الأنثروبولوجيا)"],
      ["2. Physical Science Building", "chemistry, geology, engineering (الكيمياء، الجيولوجيا، الهندسة)"],
      ["3. Humanities Building", "languages, history, political science (اللغات، التاريخ، العلوم السياسية)"],
      ["4. Life Science Building", "biology, food science (علم الأحياء، علوم التغذية)"]
    ]
  },
  {
    "type": "qa",
    "question": "C. LISTENING TO A PERSONAL STORY: حل أسئلة قصة كاسي مع المرشد الأكاديمي:\n1. What was Cassie's problem?\n2. What didn't her parents want her to study?\n3. What will Cassie probably be after graduation?",
    "answer": "1. She was under stress and confused about her major. (كانت تحت التوتر ومشتتة بشأن اختيار تخصصها). \n2. music. (لم يكن والداها يرغبان في أن تدرس الموسيقى). \n3. a music therapist. (ستصبح على الأرجح معالجة بالموسيقى).",
    "explanation": "قصة استماع واقعية عن دور الإرشاد الأكاديمي (Academic Counseling) في مساعدة الطلاب."
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "Speaking Strategy: Giving Suggestions",
    "content": "To give someone a suggestion (advice), use can, could, or might: \n• You could go to the academic counselor. \n• You can try the Learning Resources Center. \n• The college's website might be helpful."
  },

  // ===========================================================================
  // CHAPTER 3: LANGUAGE LEARNING (الصفحات 26 إلى 33)
  // ===========================================================================
  {
    "type": "h1",
    "text": "الفصل الثالث: تعلم اللغات والدماغ والذاكرة (Chapter 3: Language Learning)",
    "badge": "الوحدة 3"
  },

  // --- ص 26: أسئلة التفكير ومفردات الدماغ والتعلم ---
  {
    "type": "h2",
    "prefix": "22.",
    "text": "مدخل الدماغ والتعلم والمفردات التحضيرية (The Brain, Learning & Vocabulary)"
  },
  {
    "type": "callout",
    "variant": "note",
    "title": "A. THINKING AHEAD: أسئلة التفكير القبلي حول الدماغ",
    "content": "1. In your opinion, what determines intelligence—genes or education? \n2. Can the adult brain change and become better? (Yes, through learning and new connections). \n3. What things are easy for you to remember? \n4. What things are difficult for you to remember?"
  },
  {
    "type": "table",
    "title": "B. VOCABULARY PREPARATION: حل تمرين مفردات الدماغ الستة كاملاً",
    "headers": ["الرقم", "الجملة المقررة في الكتاب", "الكلمة الزرقاء", "المعنى المعتمد", "الترجمة العربية"],
    "rows": [
      ["1", "For a few years, one educational method is popular. Then a new approach appears, and everything changes.", "approach", "method (طريقة أو أسلوب)", "يظهر أسلوب أو مدخل تعليمي جديد فيغير كل شيء."],
      ["2", "In the right environment, neurons grow new connections.", "neurons", "brain cells (خلايا عصبية)", "تنمو روابط عصبية جديدة للخلايا الدماغية."],
      ["3", "Brain cells need stimulation—something new to experience.", "stimulation", "something new to experience (تنشيط وتحفيز)", "تحتاج الخلايا الدماغية إلى التحفيز وخوض تجارب جديدة."],
      ["4", "The stimulation needs to be challenging—difficult, but not too difficult.", "challenging", "difficult, but not too difficult (تحدٍ معتدل الصعوبة)", "يجب أن ينطوي التحفيز على تحدٍ متوازن دون إحباط."],
      ["5", "Is it important to find a solution—an answer to the problem?", "solution", "an answer to the problem (حل للمشكلة)", "التوصل لحل المشكلة."],
      ["6", "A mnemonic is a technique to help the memory.", "mnemonic", "technique to help the memory (تقنية استذكار)", "الرمز الاستذكاري تقنية لمساعدة الذاكرة على الحفظ."]
    ]
  },

  // --- ص 27-28: النص القرائي الرئيسي: The Brain, Learning, and Memory ---
  {
    "type": "h2",
    "prefix": "23.",
    "text": "النص القرائي: الدماغ والتعلم والذاكرة لكتاب إريك جنسن (Reading: The Brain, Learning, and Memory)"
  },
  {
    "type": "callout",
    "variant": "definition",
    "title": "Reading Strategy: Guessing Meanings of New Words: Examples",
    "content": "You don't always need a dictionary to guess the meaning of a new word. Sometimes you can know the meaning of the word from an example. Look after the words (such as) or (for example): \n• Example: It's important to have stimulation such as a new movie, a new friend, a new place—anything new."
  },
  {
    "type": "bilingual",
    "badge": "Reading — Paragraph 1: Eric Jensen's Discoveries",
    "english": "New ways of teaching come and go. For a few years, one educational method is popular, and many teachers use it. Then a new approach—method—appears, and everything changes. So which ways are best? How can students learn fast and well? A new book looks at the human brain to answer these questions. Eric Jensen's Teaching with the Brain in Mind is an important book for any serious, creative teacher. Scientists know that genes determine 30-60 percent of the connections in our brain. Education and life experience determine the other 40-70 percent. In his book, Jensen shares new discoveries and their influence on education. We now know this: 'learning changes the brain.' This is good news. In a rich environment, neurons—brain cells—grow new connections. People can become more intelligent. This is true of both children and adults.",
    "arabic": "تتوالى طرائق التدريس وتتبدل عبر السنين؛ فلبضع سنوات تشيع طريقة تعليمية معينة ويستخدمها المدرسون، ثم يظهر مدخل أو أسلوب جديد فيتغير كل شيء. فأي الطرائق هي الفضلى؟ وكيف يتعلم الطلاب بسرعة وإتقان؟ يتناول كتاب جديد الدماغ البشري للإجابة عن هذه التساؤلات، وهو كتاب 'التعليم مع مراعاة الدماغ' للكاتب إريك جنسن، وهو مرجع هام لكل معلم جاد ومبدع. يدرك العلماء أن الجينات الوراثية تقرر ما بين 30 إلى 60 بالمئة من الروابط في أدمغتنا، في حين يحدد التعليم وتجارب الحياة النسبة المتبقية البالغة 40 إلى 70 بالمئة. ونحن نعلم اليوم حقيقة جوهرية: 'التعلّم يغيّر الدماغ فعلياً'. وهذه بشرى سارة؛ ففي البيئة الغنية، تنمو تشابكات جديدة للخلايا العصبية (neurons)، ويستطيع الإنسان أن يزداد ذكاءً، وهذا يصدق على الصغار والبالغين معاً.",
    "notes": "التعليم وتجارب الحياة يحددان 40-70% من تشابكات الدماغ. التعلم يغير الدماغ حقيقةً."
  },
  {
    "type": "bilingual",
    "badge": "Reading — Paragraph 2: What is a Rich Environment?",
    "english": "What is a 'Rich' Environment? The main characteristic of a rich environment is stimulation—something new to experience such as a new movie, a new friend, new information, a new place—anything. The stimulation needs to be challenging—difficult, but not too difficult. With too little stimulation, students become bored. With too much stimulation, students give up—stop trying. According to Jensen, the 'best way to grow a better brain' is to have the challenge of a new problem to work on. In a classroom, there are many exercises to work on such as word games, puzzles, discussions, or real problems. It isn't important to the brain to find a solution—an answer to the problem; neurons grow because the brain is working to solve the problem, not because the solution is right or wrong.",
    "arabic": "ما هي 'البيئة الغنية' المحفزة؟ السمة الرئيسية للبيئة الغنية هي التحفيز (stimulation)—أي خوض تجربة جديدة: كفيلم جديد، أو صديق جديد، أو معلومة جديدة، أو مكان جديد. ويجب أن يكون هذا التحفيز منطوياً على تحدٍ معتدل الصعوبة (challenging)—أي صعباً ولكن ليس مفرط الصعوبة؛ فإذا كان التحفيز قليلاً جداً يصاب الطلاب بالملل، وإذا كان مفرطاً يستسلم الطلاب ويتوقفون عن المحاولة! ووفقاً لجنسن، فإن 'أفضل طريقة لتطوير دماغ أفضل' هي مواجهة تحدي مشكلة جديدة للعمل عليها؛ ولا يهم الدماغ في واقع الأمر أن يصل إلى حل المشكلة، فالروابط العصبية تنمو وتتشابك لمجرد بذل الجهد ومحاولة التفكير لحل المشكلة، وليس بناءً على صحة الحل أو خطئه!",
    "notes": "المحاولة والتفكير هما اللذان ينميان خلايا الدماغ وليس صحة الجواب النهائي."
  },
  {
    "type": "bilingual",
    "badge": "Reading — Paragraph 3: Linguistic & Physical Memory",
    "english": "Many people say, 'I have a bad memory. I can't remember people's names or words in a new language.' In Teaching with the Brain in Mind, Jensen discusses different types of memory. One type is 'linguistic memory' of words, names, numbers, and textbook information. Our new understanding of the brain tells us this about linguistic memory: 'We remember best in chunks, not bits.' Chunks are bigger than bits. For example, a chunk is a group of words, a sentence, or a song. A bit is one letter, one word, or one note of music. One way to remember information in chunks is with mnemonics. A mnemonic is a technique to help the memory. Mnemonics are helpful because they are chunks. Another type of memory is physical memory. This kind of memory lasts a very long time. For example, most adults can still remember how to ride a bicycle many years after they first learned. There is a connection between memory and physical actions such as sports, dance, or simply moving around the classroom. The brain and body remember together.",
    "arabic": "يشتكي كثير من الناس قائلين: 'ذاكرتي ضعيفة، ولا أتذكر الأسماء أو مفردات اللغة الجديدة'. يناقش جنسن أنواعاً مختلفة من الذاكرة: أحدها 'الذاكرة اللغوية' الخاصة بالكلمات والأرقام والمعلومات. وتخبرنا الاكتشافات الجديدة أننا: 'نتذكر بشكل أفضل في هيئة كتل ومجموعات (chunks) وليس وحدات صغيرة منفصلة (bits)'. والكتلة أكبر من الوحدة، فهي جملة أو تعبير أو أغنية، بينما الوحدة حرف واحد أو نغمة واحدة. ومن أفضل وسائل الحفظ في هيئة كتل تقنيات الاستذكار والرموز الحفظية (mnemonics). وهناك نوع آخر هو 'الذاكرة الجسدية والحركية' التي تدوم لفترة طويلة جداً؛ كقدرة البالغين على ركوب الدراجة بعد سنوات من تعلمها؛ فالجسد والدماغ يتذكران معاً بالحركة والنشاط.",
    "notes": "chunks: مجموعات وكتل لفظية. bits: وحدات مفردة. Mnemonics are chunks."
  },
  {
    "type": "table",
    "title": "أشهر تقنيات الاستذكار الواردة في المقرر (Common Mnemonics)",
    "headers": ["المعلومة المراد تذكرها", "الرمز أو الجملة الاستذكارية (Mnemonic)", "التفسير الأكاديمي"],
    "rows": [
      [
        "ألوان الطيف بالترتيب: Red, Orange, Yellow, Green, Blue, Indigo, Violet",
        "Roy G. Biv",
        "اسم رجل وهمي تمثل أحرفه الحرف الأول من كل لون بالترتيب."
      ],
      [
        "كواكب المجموعة الشمسية حسب البعد عن الشمس: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto",
        "My very educated mother just sent us nine pencils.",
        "الحرف الأول من كل كلمة يطابق الحرف الأول لاسم الكوكب."
      ],
      [
        "قاعدة إملائية لحرفي I و E في الكلمات",
        "I before E except after C",
        "يأتي الحرف I قبل E (movie, piece) إلا إذا سبقه حرف C فيأتي العكس (receive)."
      ]
    ]
  },

  // --- ص 29: مفردات طرائق التدريس والامتحان المقالي ---
  {
    "type": "h2",
    "prefix": "24.",
    "text": "مفردات طرائق التدريس والامتحان المقالي (Language Teaching Methods)"
  },
  {
    "type": "table",
    "title": "A. VOCABULARY PREPARATION: حل تمرين مفردات طرائق التدريس الستة",
    "headers": ["الرقم", "الجملة المقررة في الكتاب", "الكلمة الزرقاء", "الحل والتعريف المطابق", "الترجمة"],
    "rows": [
      ["1", "The students need to read one passage in the book.", "passage", "(d) piece of writing or speech", "فقرة أو نص مكتوب أو مقروء."],
      ["2", "Students memorize lists of new words.", "memorize", "(e) learn by heart / remember without looking", "يحفظ عن ظهر قلب."],
      ["3", "The teacher gives commands such as 'Stand up' or 'Open your book.'", "commands", "(c) orders", "أوامر وتعليمات حركية."],
      ["4", "The students are very active. They move around the class and do things.", "active", "(b) energetic / moving around", "نشيط وحركي."],
      ["5", "The students focus on vocabulary. They spend a lot of time on this.", "focus on", "(f) pay close attention to", "يركز انتباهه ووقته على الشيء."],
      ["6", "These strategies are techniques to help students with new words.", "strategies", "(a) ways or methods to do something well", "استراتيجيات وخطط متقنة."]
    ]
  },
  {
    "type": "callout",
    "variant": "definition",
    "title": "Reading Strategy: Guessing the Meanings of New Words: Parentheses",
    "content": "Sometimes there is a definition of the new word in parentheses (...) after the word: \n• Example: Students need to learn strategies for note-taking (writing information about a reading or listening passage)."
  },
  {
    "type": "table",
    "title": "مقارنة طرائق تدريس اللغة الإنجليزية الثلاث الواردة في الامتحان المقالي (Education 251 Exam)",
    "headers": ["طريقة التدريس", "المفهوم الأساسي", "ماذا يفعل الطلاب في الصف؟"],
    "rows": [
      [
        "1. The Grammar-Translation Method (طريقة القواعد والترجمة)",
        "طريقة تقليدية تركز على حفظ القواعد وترجمة النصوص الأدبية.",
        "يحفظ الطلاب قوائم المفردات غيباً ويترجمون النصوص كلمة بكلمة بين اللغتين."
      ],
      [
        "2. TPR - Total Physical Response (الاستجابة الجسدية الكاملة)",
        "طريقة تعتمد على الاستماع وتنفيذ الأوامر بحركات جسدية ونشاط حركي.",
        "يستمع الطلاب لأوامر المعلم الحركية (قف، افتح الباب، امشِ) وينفذونها جسدياً دون ضغط للكلام."
      ],
      [
        "3. The Lexical Approach (المدخل المعجمي)",
        "طريقة تركز على الكتل اللفظية والتراكيب الشائعة (Phrases/Chunks) بدلاً من القواعد المجردة.",
        "يتعلم الطلاب العبارات والتلازمات اللفظية (Collocations) لاستخدامها مباشرة في التواصل اليومي."
      ]
    ]
  },

  // --- ص 30-31: قواعد Or و But وحروف الجر ---
  {
    "type": "h2",
    "prefix": "25.",
    "text": "قواعد أدوات الربط Or و But والكلمات بعد حروف الجر (Grammar & Writing)"
  },
  {
    "type": "callout",
    "variant": "important",
    "title": "قاعدة استخدام أداة الربط Or في الأفكار المنفية",
    "content": "The word (or) can mean 'and' when you combine two negative ideas: \n• I don't read Swedish + I don't write Swedish = I don't read or write Swedish. \n\nحل تمرين الجمل الخمسة المقررة (A. PRACTICE): \n1. I don't know Maria. I don't know Jen. -> [I don't know Maria or Jen.] \n2. Dad didn't make mistakes in grammar. He didn't make mistakes in spelling. -> [Dad didn't make mistakes in grammar or spelling.] \n3. We don't need to read Chapter 5. We don't need to read Chapter 6. -> [We don't need to read Chapter 5 or Chapter 6.] \n4. In that class, they don't practice listening. They don't practice speaking. -> [In that class, they don't practice listening or speaking.] \n5. Julia doesn't have the class notes. She doesn't know the assignment. -> [Julia doesn't have the class notes or know the assignment.]"
  },
  {
    "type": "table",
    "title": "قاعدة وحل تمرين الفاصلة مع أداة الربط But للجمل الخمسة",
    "headers": ["الرقم", "الجملتان في الكتاب", "الجملة بعد الدمج بـ But والترقيم", "التعليل الإملائي"],
    "rows": [
      ["1", "I studied French. I didn't study Greek.", "I studied French, but I didn't study Greek.", "فاصلة قبل but لوجود فاعل وفعل (I didn't)."],
      ["2", "We worked on vocabulary. We didn't work on grammar.", "We worked on vocabulary, but we didn't work on grammar.", "فاصلة قبل but لوجود فاعل وفعل."],
      ["3", "Emma did Chapter 5. She didn't do Chapter 6.", "Emma did Chapter 5, but she didn't do Chapter 6.", "فاصلة قبل but لوجود فاعل وفعل."],
      ["4", "We don't practice listening or speaking. That isn't a problem for me.", "We don't practice listening or speaking, but that isn't a problem for me.", "فاصلة قبل but لوجود جملة كاملة جديدة."],
      ["5", "Some students think this is a problem. I don't.", "Some students think this is a problem, but I don't.", "فاصلة قبل but."]
    ]
  },
  {
    "type": "callout",
    "variant": "important",
    "title": "قاعدة الكلمات بعد حروف الجر (Words after Prepositions)",
    "content": "1. القاعدة العامة: يتبع حرف الجر إما اسم (Noun) أو اسم فاعل gerund (فعل + ing): \n• a good method of [education]. (noun) \n• a good method of [learning] English. (gerund) \n\n2. الاستثناء: حرف الجر (to) يتبعه مصدر مجرد (Simple Verb): \n• I need to [solve] this problem. (تأتي بعد: need, want, hope, have). \n\n3. الإجابة عن سؤال How: نستخدم (By + Gerund): \n• She found out about the exam by [asking] her classmate."
  },
  {
    "type": "table",
    "title": "C. PRACTICE: حل تمرين الكلمات بعد حروف الجر للجمل العشرة",
    "headers": ["الرقم", "الجملة مع الحل في الفراغ", "الكلمة والحل", "التعليل النحوي"],
    "rows": [
      ["1", "In the lexical approach, students focus on [learning] vocabulary.", "learning (gerund)", "بعد حرف الجر on نضع gerund."],
      ["2", "In the Natural Approach, they don't worry about [having] correct grammar.", "having (gerund)", "بعد حرف الجر about نضع gerund."],
      ["3", "Most students think it's important to [practice] speaking.", "practice (simple verb)", "بعد to نضع مصدراً مجرداً."],
      ["4", "On an essay exam, you need to [synthesize] information.", "synthesize (simple verb)", "بعد need to نضع مصدراً مجرداً."],
      ["5", "I'm interested in [learning] more about this.", "learning (gerund)", "بعد حرف الجر in نضع gerund."],
      ["6", "He read Jensen's book to [learn] about the brain.", "learn (simple verb)", "لام التعليل to يتبعها مصدر مجرد."],
      ["7", "They're learning strategies for [reading] well.", "reading (gerund)", "بعد حرف الجر for نضع gerund."],
      ["8", "They respond in [writing].", "writing (gerund)", "بعد حرف الجر in نضع gerund."],
      ["9", "The stimulation needs to [be] challenging.", "be (simple verb)", "بعد needs to نضع مصدراً مجرداً."],
      ["10", "I hope to [do] well on the exam.", "do (simple verb)", "بعد hope to نضع مصدراً مجرداً."]
    ]
  },
  {
    "type": "qa",
    "question": "D. PRACTICE: حل تمرين الإجابة عن أسئلة How باستخدام (By + Gerund):\n1. In the grammar-translation method, how do students learn a new language? (translate it)\n2. In the grammar-translation method, how do students learn vocabulary? (memorize lists of new words)",
    "answer": "1. They learn a new language by [translating] it. \n2. They learn vocabulary by [memorizing] lists of new words.",
    "explanation": "القاعدة: للإجابة عن سؤال الكيفية (How) نستخدم حرف الجر By متبوعاً بـ Gerund (فعل + ing)."
  },

  // --- ص 32-33: ورشة المفردات والتمارين الشاملة ---
  {
    "type": "h2",
    "prefix": "26.",
    "text": "ورشة المفردات النهائية والتمارين الامتحانية الشاملة (Vocabulary Workshop)"
  },
  {
    "type": "table",
    "title": "A. MATCHING: حل تمرين مطابقة المفردات العشرة كاملاً",
    "headers": ["الرقم والكلمة", "الحل والتعريف المطابق بالإنكليزية", "الترجمة والمعنى"],
    "rows": [
      ["1. passage", "(d) piece of writing or speech", "فقرة أو نص مكتوب أو مقروء."],
      ["2. strategies", "(g) ways or methods to do something well", "استراتيجيات وخطط متقنة."],
      ["3. commands", "(j) orders", "أوامر وتعليمات."],
      ["4. inherit", "(a) receive (from parents)", "يرث جينات من والديه."],
      ["5. identical", "(e) exactly the same", "متطابق تماماً."],
      ["6. similar", "(h) almost the same", "مشابه إلى حد كبير."],
      ["7. whatever", "(f) anything", "أي شيء مهما كان."],
      ["8. entertainment", "(c) fun", "تسلية وترفيه."],
      ["9. identity", "(b) our idea of who we are", "هويتنا وفكرتنا عن حقيقة أنفسنا."],
      ["10. costumes", "(i) clothes in a movie", "أزياء وملابس تمثيلية."]
    ]
  },
  {
    "type": "table",
    "title": "B. TRUE OR FALSE?: حل تمرين صح أو خطأ للعبارات الثمانية كاملاً",
    "headers": ["الرقم", "العبارة المقررة في الكتاب", "الحل (T/F)", "التعليل الأكاديمي"],
    "rows": [
      ["1", "On a multiple-choice exam, you write a paragraph.", "False (F)", "في امتحان الخيارات المتعددة نختار إجابة ولا نكتب فقرة."],
      ["2", "Albert Einstein was a scientist.", "True (T)", "ألبرت آينشتاين عالم فيزياء شهير."],
      ["3", "Non-identical twins have the same genes.", "False (F)", "التوائم غير المتطابقة تتشارك 50% فقط من الجينات."],
      ["4", "A shy person is a little afraid of other people.", "True (T)", "الشخص الخجول يتوتر ويخاف من مواجهة الناس."],
      ["5", "A setting is a place.", "True (T)", "بيئة القصة (setting) تدل على المكان والزمان."],
      ["6", "A puzzle is physically difficult.", "False (F)", "الأحجية صعوبتها ذهنية وليست عضلية جسدية."],
      ["7", "You think with your brain.", "True (T)", "التفكير يتم بالدماغ."],
      ["8", "A mnemonic is a strategy to help you remember something.", "True (T)", "الرمز الاستذكاري تقنية مساعدة للذاكرة والحفظ."]
    ]
  },
  {
    "type": "callout",
    "variant": "exam_tip",
    "title": "C. WORDS IN PHRASES: PREPOSITIONS: حل تمرين حروف الجر للفقرتين",
    "content": "الفقرة الأولى: \n'There's a big exam tomorrow, and we need to study. According to the professor, it'll be different [from] the last exam. This one will be a combination [of] multiple-choice and short answer. I think we need to focus [on] studying Chapter 2.' \n\nالفقرة الثانية: \n'My Uncle Armen was a big influence [on] me. He was outgoing, and he told great stories [about] his favorite trips. He wasn't afraid [of] anything. Everyone says that I am very similar [to] him, but I don't think I am.'"
  },
  {
    "type": "table",
    "title": "D. WHICH WORD DOESN'T BELONG?: حل تمرين استبعاد الكلمة الشاذة للأسطر الثمانية",
    "headers": ["رقم السطر", "مجموعة الكلمات المقررة", "الكلمة الشاذة (Odd Word)", "السبب والتعليل الأكاديمي الدقيق"],
    "rows": [
      ["1", "height, emotion, weight", "emotion", "لأن height (الطول) و weight (الوزن) قياسات جسدية، بينما emotion شعور."],
      ["2", "story, plot, role", "role", "لأن story (القصة) و plot (الحبكة) من عناصر القصة، بينما role هو الدور التمثيلي."],
      ["3", "techniques, methods, thinks", "thinks", "لأن techniques و methods أسماء تعني أساليب وطرائق، بينما thinks فعل مضارع."],
      ["4", "assign, respond, answer", "assign", "لأن respond و answer يعنيان الإجابة والرد، بينما assign يعني يحدد مهمة."],
      ["5", "upper class, middle class, English class", "English class", "لأن الأولين طبقات اجتماعية واقتصادية، بينما English class حصة لغة."],
      ["6", "DNA, personality, genes", "personality", "لأن DNA و genes عناصر وراثية بيولوجية، بينما personality سمة شخصية."],
      ["7", "challenging, difficult, easy", "easy", "لأن challenging و difficult يدلان على الصعوبة والتحدي، بينما easy يعني سهل."],
      ["8", "material, short-answer, multiple-choice", "material", "لأن short-answer و multiple-choice أنماط أسئلة، بينما material تعني مادة."]
    ]
  }
];

const fullDocument = {
  "$schema": "./schema.json",
  "meta": {
    "department": "جميع أقسام كلية التربية",
    "year": "السنة الثانية",
    "semester": "الفصل الأول",
    "subject": "إنكليزي",
    "subjectType": "نظري",
    "lecture": "نوطة المنهاج الشامل",
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

const outputPath = path.resolve(__dirname, 'data.json');
fs.writeFileSync(outputPath, JSON.stringify(fullDocument, null, 2), 'utf8');
console.log(`Successfully generated exhaustive data.json with ${elements.length} elements!`);
