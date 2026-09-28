const fs = require('fs');
const path = require('path');

const lectureData = {
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
  "elements": [
    // -------------------------------------------------------------------------
    // مقدمة النوطة
    // -------------------------------------------------------------------------
    {
      "type": "h1",
      "text": "نوطة مقرر لغة 3 — كلية التربية (النصوص المترجمة والشرح الأكاديمي)",
      "badge": "المقرر المعتمد 2025"
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "دليل دراسة النوطة الشاملة",
      "content": "تم إعداد هذه النوطة لتكون المرجع الشامل لطلاب كلية التربية في مقرر اللغة الأجنبية 3. تتضمن النوطة النصوص القرائية الكاملة باللغة الإنكليزية مع ترجمتها العربية المعتمدة فقرة بفقرة، وشرح القواعد اللغوية وآليات المحادثة والاستماع، واستراتيجيات القراءة، وحل جميع التمارين والأسئلة الامتحانية بنموذجية ودقة تامة."
    },

    // -------------------------------------------------------------------------
    // الوحدة الأولى: Chapter 1: Identity and Learning
    // -------------------------------------------------------------------------
    {
      "type": "h1",
      "text": "الفصل الأول: الهوية والتعلّم (Chapter 1: Identity and Learning)",
      "badge": "الوحدة 1"
    },
    {
      "type": "h2",
      "prefix": "أولاً:",
      "text": "النص القرائي الأول: قصص التوائم (Stories of Twins)"
    },
    {
      "type": "bilingual",
      "badge": "Reading 1 — Part 1: Mark and Gerald",
      "english": "Mark and Gerald are identical twin brothers. They met for the first time as adults. They didn't meet each other until the age of 32 because they were separated at birth. They looked identical—exactly the same. When they looked at each other, it was like looking in a mirror. But they grew up in different families. They went to different schools in different towns. They had different friends. So the brothers were very different from each other, right? Wrong! Each brother started to learn about the other. Both liked movies starring the actor John Wayne. Both liked the same sport—wrestling. And both had the same job—as firefighters!",
      "arabic": "مارك وجيرالد أخوان توأمان متطابقان. التقيا للمرة الأولى وهما بالغان. لم يلتقيا ببعضهما حتى سن الـ 32 لأنهما فُصلا عند الولادة. كانا يبدوان متطابقين تماماً—بالضبط المظهر نفسه. وعندما نظر كل منهما إلى الآخر، بدا الأمر وكأنه ينظر في المرآة. ولكنهما نشآ في عائلتين مختلفتين، والتحقا بمدارس مختلفة في بلدات مختلفة، وكان لكل منهما أصدقاء مختلفون. إذن، هل كان الأخوان مختلفين تماماً عن بعضهما، أليس كذلك؟ خطأ! بدأ كل أخ يتعرف على تفاصيل حياة الآخر، وتبيّن أن كليهما يحب الأفلام التي يقوم ببطولتها الممثل جون واين، وكلاهما يعشق الرياضة نفسها—وهي المصارعة، بل وعمل كلاهما في نفس المهنة تحديداً—كرجال إطفاء!",
      "notes": "identical تعني متطابق تماماً (exactly the same). كلمة firefighters تعني رجال الإطفاء."
    },
    {
      "type": "bilingual",
      "badge": "Reading 1 — Part 2: The Two Jims",
      "english": "Jim Springer and Jim Lewis are also identical twins. Like Mark and Gerald, they didn't grow up together. They grew up in different families and met for the first time 39 years after they were born. Of course, their appearance was the same: the same height, the same weight, the same hair color and eye color. But they noticed more. They also walked and moved the same way. Their likes and dislikes were the same. They drove the same kind of car. In school, they both liked math and disliked spelling. For vacations, they both enjoyed the exact same beach in Florida. And they both disliked baseball.",
      "arabic": "جيم سبرينغر وجيم لويس هما أيضاً توأمان متطابقان. ومثل مارك وجيرالد، لم ينشآ معاً، بل تربيا في عائلتين منفصلتين والتقيا للمرة الأولى بعد 39 عاماً من ولادتهما. وبالطبع كان مظهرهما الخارجي واحداً: نفس الطول، ونفس الوزن، ونفس لون الشعر ولون العيون. لكنهما لاحظا ما هو أعمق من ذلك؛ فقد كانا يمشيان ويتحركان بنفس الأسلوب، وكانت رغباتهما وما يكرهانه متطابقاً، وقادا نفس نوع السيارة! وفي المدرسة، كلاهما كان يحب الرياضيات ويكره التهجئة. وفي الإجازات، كلاهما قصد نفس الشاطئ تحديداً في ولاية فلوريدا، وكلاهما كان يكره رياضة البيسبول.",
      "notes": "likes and dislikes تعني الأشياء التي نحبها ونكرهها. notice تعني يلاحظ."
    },
    {
      "type": "bilingual",
      "badge": "Reading 1 — Part 3: Twin Studies",
      "english": "Scientists can learn a lot from the study of twins. Our identity—our appearance and personality—seems to come mostly from our parents. Even twins separated from childhood are very much alike.",
      "arabic": "يستطيع العلماء تعلم الكثير من دراسة التوائم. إن هويتنا—مظهرنا وشخصيتنا—يبدو أنها تنحدر في معظمها من آبائنا (بالوراثة). وحتى التوائم الذين فُصلوا منذ مرحلة الطفولة يتشابهون إلى حد كبير جداً في الطباع والصفات.",
      "notes": "alike تعني متشابهين جداً (very similar)."
    },

    // تمارين النص الأول
    {
      "type": "h2",
      "prefix": "ثانياً:",
      "text": "حل أسئلة الاستيعاب والمقارنة (After Reading: Comprehension & Grammar)"
    },
    {
      "type": "qa",
      "question": "Mark and Gerald look the same. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "ورد في النص: 'They looked identical—exactly the same' فهما توأمان متطابقان شكلياً تماماً.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Mark and Gerald grew up in the same home. (True / False)",
      "answer": "False (خطأ)",
      "explanation": "النص يوضح: 'They grew up in different families' و 'separated at birth' أي أنهما لم يعيشا في نفس المنزل.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Mark and Gerald have similar interests. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "تشابها في حب أفلام جون واين والمصارعة والعمل في إطفاء الحرائق.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Mark and Gerald do the same kind of work. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "كلاهما يعمل إطفائياً: 'And both had the same job—as firefighters!'.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "As children, Jim Springer and Jim Lewis lived together. (True / False)",
      "answer": "False (خطأ)",
      "explanation": "لم يعيشا معاً كأطفال، بل التقيا بعد 39 عاماً من ولادتهما.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Jim and Jim liked different things. (True / False)",
      "answer": "False (خطأ)",
      "explanation": "كانا يحبان نفس الأشياء ونفس السيارة ونفس الشاطئ في فلوريدا.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Appearance and personality are part of our identity. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "النص يؤكد: 'Our identity—our appearance and personality...'.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "قاعدة هامة: تراكيب التشابه والمقارنة في الامتحان",
      "content": "يجب حفظ حروف الجر المصاحبة لكلمات المقارنة: 1. the same as (نفس الشيء تماماً) — 2. similar to (مشابه لـ) — 3. different from (مختلف عن). تأتي في أسئلة اختر الإجابة الصحيحة أو تصحيح الأخطاء."
    },

    // استراتيجية الشَرطة والمفردات
    {
      "type": "h2",
      "prefix": "ثالثاً:",
      "text": "استراتيجية القراءة: تخمين المعاني من الشَرطة (Dashes) والمفردات"
    },
    {
      "type": "callout",
      "variant": "definition",
      "title": "Reading Strategy: Guessing the Meanings of New Words: Dashes",
      "content": "لا تحتاج دائماً إلى قاموس لتخمين معنى الكلمة الجديدة؛ ففي كثير من الأحيان يضع الكاتب تفسير الكلمة مباشرة بعد الشَرطة (—). مثال المقرر: 'They looked identical—exactly the same' -> إذن معنى identical هو exactly the same."
    },
    {
      "type": "definitions",
      "title": "مفردات الدرس الأول والثاني المقررة للحفظ والامتحان",
      "items": [
        {
          "term": "normal (adj.)",
          "definition": "not strange (طبيعي / مألوف / غير غريب)",
          "example": "He worked in a department store; it was a normal life."
        },
        {
          "term": "adult (n.)",
          "definition": "not a child; a person over 18 (شخص بالغ / راشد)",
          "example": "As a child he loved movies; as an adult he still loved them."
        },
        {
          "term": "whatever (pron.)",
          "definition": "anything (أي شيء مهما كان)",
          "example": "It is possible to be whatever you want to be."
        },
        {
          "term": "design (v.)",
          "definition": "plan and make (يصمم / يخطط ويبتكر)",
          "example": "He began to design clothes for his own business."
        },
        {
          "term": "upper-class (adj.)",
          "definition": "rich; not poor (طبقة أثرياء / راقية)",
          "example": "Fine suits from British movies about upper-class people."
        },
        {
          "term": "hero (n.)",
          "definition": "the star or main character of a story/movie (بطل)",
          "example": "He became the hero of his own movie—his life."
        },
        {
          "term": "entertainment (n.)",
          "definition": "fun and leisure activities (تسلية وترفيه)",
          "example": "Movies are big business and a form of entertainment."
        }
      ]
    },

    // النص القرائي الثاني: You Are the Star of Your Own Movie
    {
      "type": "h2",
      "prefix": "رابعاً:",
      "text": "النص القرائي الثاني: أنت نجم فيلمك الخاص (You Are the Star of Your Own Movie)"
    },
    {
      "type": "bilingual",
      "badge": "Reading 2 — Paragraph 1: Ralph Lauren",
      "english": "Ralph Lifshitz was born in 1939. He grew up in the Bronx, New York, in a middle-class family—not poor, but not rich. After high school, he studied business at City College in New York. Then he worked in a department store. It was a normal life. But Ralph Lifshitz didn't want a normal life. As a child, he loved movies. As an adult, he still loved movies. He wanted to be like the actors. He learned something important in movie theaters: it's possible to 'be whatever you want to be.' At age 17, he changed his name to Ralph Lauren because Lauren is easier to pronounce and spell than Lifshitz. He began to design clothes: jeans and boots from cowboy movies and fine English suits from British movies about rich, upper-class people. He created his own company and became famous and successful. He became the hero of his own 'movie'—his life.",
      "arabic": "وُلد رالف ليفشيتز في عام 1939. ونشأ في حي برونكس بنيويورك ضمن أسرة من الطبقة المتوسطة—ليست فقيرة وليست غنية. بعد الثانوية، درس إدارة الأعمال في كلية سيتي كوليدج، ثم عمل موظفاً في متجر متعدد الأقسام. كانت حياة عادية، لكن رالف ليفشيتز لم يكن يرضى بحياة عادية! فقد عشق الأفلام طفلاً وبقي محباً لها وهو بالغ، وتمنى أن يصبح مثل نجوم السينما. وتعلّم درساً ثميناً في صالات العرض: أن بمقدورك أن 'تكون أي شيء ترغب فيه'. وفي سن السابعة عشرة، غير اسمه إلى 'رالف لورين' لسهولة نطقه وكتابته. ثم بدأ في تصميم الأزياء: سراويل الجينز وأحذية رعاة البقر، والبدلات الإنجليزية الفاخرة المستوحاة من أفلام الطبقة الأرستقراطية. وأسس شركته الخاصة ليغدو مشهوراً وناجحاً، وبطلاً لفيلمه الخاص الذي هو حياته.",
      "notes": "middle-class تعني طبقة متوسطة (not poor, but not rich)."
    },
    {
      "type": "bilingual",
      "badge": "Reading 2 — Paragraph 2: Neal Gabler & Identity",
      "english": "Movies are big business. They are entertainment. But they are more than that. In his book Life: the Movie, Neal Gabler says movies change us in both small and big ways. Part of our identity—our idea of who we are—comes from movies. Movies teach us how to do things, how to be. The actor Elizabeth Taylor describes actors as 'shy'—a little nervous and afraid of people. But they learn to hide in their movie roles. They become different, not shy. In a similar way, Gabler says, all of us play roles in everyday life. We have many roles—as student, child, parent, friend, customer, worker.",
      "arabic": "إن صناعة الأفلام تجارة ضخمة ووسيلة للترفيه، لكنها تتجاوز ذلك بكثير. ففي كتابه 'الحياة: الفيلم'، يرى الكاتب نيل غابلر أن الأفلام تغيرنا بطرق صغيرة وكبيرة معاً، وأن جزءاً من هويتنا—أي فكرتنا عن حقيقة أنفسنا—مشتق من السينما؛ فالأفلام تعلمنا كيف نتصرف وكيف نكون. وتصف الممثلة إليزابيث تايلور الممثلين بأنهم 'خجولون'—أي يشعرون بالتوتر والخوف من الناس، لكنهم يتعلمون الاختباء خلف أدوارهم التمثيلية فيغدون أشخاصاً مختلفين دون خجل. وبطريقة مماثلة، يرى غابلر أننا جميعاً نلعب أدواراً في حياتنا اليومية: كطالب، وابن، ووالد، وصديق، وزبون، وعامل.",
      "notes": "shy تعني خجول (a little nervous and afraid of people). role تعني دور اجتماعي أو تمثيلي."
    },
    {
      "type": "bilingual",
      "badge": "Reading 2 — Paragraph 3: Create Your Plot",
      "english": "It's an interesting idea. Your own life is a movie, and you are the star. You don't only play the hero of your movie. You create the whole movie. You choose the costumes—the clothes. You choose the scenes—places to live, go to school, or take a vacation. You choose the other actors—your friends, for example. Maybe most important is the plot—the story. You are also the writer of your movie, and you can choose to change the plot!",
      "arabic": "إنها فكرة في غاية الروعة؛ فحياتك فيلم كامل وأنت نجمه اللامع! وأنت لا تؤدي دور البطل فحسب، بل تصنع الفيلم برمته: تختار الأزياء—أي ثيابك، وتختار المشاهد—أماكن سكنك ودراستك وإجازتك، وتختار الممثلين الآخرين المشاركين معك—كأصدقائك مثلاً. ولعل العنصر الأكثر أهمية هو الحبكة الدرامية (the plot)—أي القصة نفسها؛ فأنت مؤلف الفيلم وكاتبه، ولديك كامل الخيار في أن تغير مجرى الحبكة متى شئت!",
      "notes": "costumes تعني الأزياء/الملابس. plot تعني حبكة القصة. setting تعني مكان وزمان الأحداث."
    },

    // تمارين واستراتيجية الفكرة الرئيسية
    {
      "type": "h2",
      "prefix": "خامساً:",
      "text": "حل تمارين النص الثاني واستراتيجيات القراءة وأقسام الكلام"
    },
    {
      "type": "qa",
      "question": "What is the main idea of the reading 'You Are the Star of Your Own Movie'?",
      "options": [
        "Ralph Lauren changed his life because of movies.",
        "Everyone has different roles in life.",
        "Your life is similar to a movie, and you can change it."
      ],
      "correctOptionIndex": 2,
      "answer": "الخيار (ج): Your life is similar to a movie, and you can change it.",
      "explanation": "الفكرة الرئيسية تظهر في نهاية النص: حياتك تشبه الفيلم وبمقدورك تغيير مجرى قصتها وحبكتها.",
      "tag": "سؤال امتحان أساسي"
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "حل تمرين ملء الفراغات بالمفردات (Vocabulary Check — ص 8)",
      "content": "1. Jenny was [shy] and a little afraid of people. \n2. Peter comes from a [middle-class] family in a small town. His family is not rich or poor. \n3. John Wayne often played the [role] of a cowboy in old movies. \n4. Neal Gabler thinks part of our [identity] comes from movies. \n5. The [costumes] in the movie were very beautiful long dresses and fine suits. \n6. In the [plot] of the movie, a young man goes to Miami and tries to become a firefighter. \n7. The [setting] of the movie is Hawaii."
    },
    {
      "type": "table",
      "title": "جدول أقسام الكلام (Understanding Parts of Speech)",
      "headers": ["القسم (Part of Speech)", "المعنى والوظيفة", "أمثلة من المقرر"],
      "rows": [
        ["Noun (n.) — الاسم", "شخص أو مكان أو شيء (person, place, thing)", "school, height, mirror, firefighter, identity, costume"],
        ["Adjective (adj.) — الصفة", "تصف الاسم وتعطي خصائصه (describes a noun)", "different, favorite, similar, identical, shy, normal, rich"],
        ["Verb (v.) — الفعل", "يدل على حدث أو حالة (shows action / state)", "am/is/are, walks, notice, separated, design, inherit, change"]
      ]
    },

    // النص القرائي الثالث: Nature vs Nurture
    {
      "type": "h2",
      "prefix": "سادساً:",
      "text": "النص القرائي الثالث: الطبيعة والتنشئة (What Makes You the Person You Are? Nature vs. Nurture)"
    },
    {
      "type": "bilingual",
      "badge": "Reading 3 — Part 1: Nature or Nurture?",
      "english": "You have your mother's eyes and your father's ears. Your sister has your mother's hair color and your father's nose. You both have your father's mouth. We all inherit these characteristics from our parents. But what about personality? What if one child is shy and another is energetic? What if one is good at music and the other is good at sports? Where do these characteristics come from? It's an old question: What makes us the people we are? Which is more important, nature or nurture? Nature is genes or DNA—biology. We receive these genes from our parents at birth. Genes determine hair color, eye color, height, and much more. Nurture means life experience and environment. Education, family, friends, books, movies, and culture are all part of nurture.",
      "arabic": "أنت تمتلك عيني والدتك وأذني والدك، وشقيقتك تملك لون شعر والدتك وأنف والدك، وكلاكما تملكان فم والدكم. كلنا نرث هذه السمات والخصائص الجسدية من آبائنا. ولكن ماذا عن الشخصية والطباع؟ ماذا لو كان أحد الأبناء خجولاً والآخر مفعماً بالنشاط والحيوية؟ ماذا لو كان أحدهما بارعاً في الموسيقى والآخر متميزاً في الرياضة؟ من أين تأتي هذه السمات؟ إنه السؤال الأزلي: ما الذي يجعلنا الأشخاص الذين نحن عليهم؟ وأيهما أكثر أهمية وتأثيراً: الطبيعة (الفطرة الوراثية Nature) أم التنشئة (البيئة المكتسبة Nurture)؟ الطبيعة تعني الجينات أو الحمض النووي (DNA)—أي البيولوجيا والوراثة التي نتلقاها من والدينا عند الولادة؛ فالجينات تحدد لون الشعر ولون العينين والطول وغير ذلك الكثير. أما التنشئة فتعني خبرات الحياة والبيئة المحيطة، وتشتمل على: التعليم، والأسرة، والأصدقاء، والكتب، والأفلام، والثقافة السائدة.",
      "notes": "inherit = receive from parents (يرث). determine = decide (يحدد). Nature = biology/genes. Nurture = life experience/environment."
    },
    {
      "type": "bilingual",
      "badge": "Reading 3 — Part 2: Twin Studies & Gene Numbers",
      "english": "Scientists study both identical and non-identical twins. Identical twins have the same genes. Non-identical twins share only 50 percent of their genes. When twins grow up together (as they usually do) in the same home, their environment is similar. But sometimes they are separated. They grow up in different homes and have different environments (nurture). Genes determine characteristics such as eye color. We already know this. But scientists now know that genes—nature—also influence personality. Identity is not simple. There isn't just one gene for every personality characteristic. For example, there isn't one gene for shyness, one for intelligence, one for happiness. Many genes together form a characteristic like being happy. Each person has only 30,000 genes. That doesn't seem like many! But think of this: The alphabet has only 26 letters (A-Z). These 26 letters can form a simple sentence ('Remember to call John') or a work by Shakespeare, the famous English writer. The number of genes isn't important. However, the combination of genes—how they are put together—is important.",
      "arabic": "يدرس العلماء التوائم المتطابقة وغير المتطابقة. التوائم المتطابقة تحمل الجينات ذاتها بنسبة 100%، بينما التوائم غير المتطابقة تشترك في 50% فقط من جيناتها. وعندما ينشأ التوأمان معاً في نفس المنزل، تكون بيئتهما متشابهة. لكن حين يفترقان وينشآن في بيئات مختلفة، تختلف التنشئة. نحن نعلم مسبقاً أن الجينات تحدد لون العينين، لكن العلماء يدركون اليوم أن الجينات تؤثر أيضاً في الشخصية. فالهوية ليست بالأمر البسيط؛ فلا يوجد جين واحد مسؤول بمفرده عن كل سمة نفسية—فلا يوجد جين منفرد للخجل أو للذكاء أو للسعادة، بل تشترك عدة جينات معاً لتكوين السمة. ويمتلك كل إنسان حوالي 30,000 جين فقط، وقد يبدو هذا الرقم قليلاً، لكن تذكر أن الأبجدية تتألف من 26 حرفاً فقط، ومع ذلك تستطيع هذه الأحرف أن تشكل جملة بسيطة أو تصوغ روائع الكاتب الإنجليزي الشهير شكسبير! إذن ليس عدد الجينات هو المهم، بل طريقة توافقها وتشابكها معاً (combination).",
      "notes": "combination تعني التركيب والتشابك التوافقي."
    },
    {
      "type": "bilingual",
      "badge": "Reading 3 — Part 3: Birth Order & The Dance of Life",
      "english": "What About Nurture? There is good news: genes don't determine everything. Your environment is important, too. The people around you, school, experiences, and even birth order are all part of this environment. For example, you may have 'musical genes,' but you probably cannot play the piano without lessons. Are you the first child in your family? Second? Third? Are you the only child? This birth order is part of your environment. A new study from Stanford University shows us that birth order has an influence on personality. The oldest (first) child is usually a careful, hard worker and often a leader. The middle child is usually friendly and loves to be with other people. The youngest (last) child likes to create new things. A child without brothers or sisters often likes to be with adults, not just children. Nature determines about 50 percent of the person you are. Nurture determines the other 50 percent. One scientist talks about the 'dance' between nature and nurture. Everything begins with nature. But experience and education—nurture—'turn on' genes (like a radio!). Then genes lead you to look for certain experiences. Together, both nature and nurture make you the person you are.",
      "arabic": "وماذا عن التنشئة والبيئة؟ هناك بشرى سارة: فالجينات لا تقرر كل شيء بمفردها؛ فالبيئة والناس والمدرسة وتجارب الحياة وحتى ترتيب ولادتك في الأسرة تلعب دوراً بارزاً. فعلى سبيل المثال، قد ترث 'جينات موسيقية'، لكنك لن تتمكن من العزف على البيانو دون تدريب ودروس! وترتيب ولادتك جزء أساسي من بيئتك؛ حيث أظهرت دراسة جديدة من جامعة ستانفورد أن ترتيب الولادة يؤثر على الشخصية: فالطفل الأكبر (البكر) عادةً ما يكون حذراً ومجتهداً وقائداً ناجحاً؛ والطفل الأوسط ودود ويحب التواصل مع الآخرين؛ والطفل الأصغر يحب ابتكار أشياء جديدة؛ والطفل الوحيد يفضل مجالسة الكبار. وخلاصة القول أن الطبيعة تحدد نحو 50% من شخصيتك، والتنشئة تحدد الـ 50% الأخرى؛ ويصف أحد العلماء هذا التفاعل بأنه 'رقصة متناغمة بين الفطرة والتنشئة'، فكل شيء يبدأ بالجينات، لكن التعليم والخبرة يفعّلان الجينات (كما نشغل المذياع!)، وكلاهما معاً يصنعان هويتك المتكاملة.",
      "notes": "Oldest: careful, leader. Middle: friendly. Youngest: creative. Only child: likes adults. النسبة الامتحانية: 50% طبيعة و 50% تنشئة."
    },

    // حل أسئلة الطبيعة والتنشئة
    {
      "type": "h2",
      "prefix": "سابعاً:",
      "text": "حل أسئلة وتدريبات الطبيعة والتنشئة (Finding Details — ص 16)"
    },
    {
      "type": "qa",
      "question": "Characteristics such as eye color, ears, and hair color come 50% from nature and 50% from nurture. (True / False)",
      "answer": "False (خطأ)",
      "explanation": "الملامح والخصائص الجسدية (لون العيون والشعر والأذن) تأتي بنسبة 100% من الطبيعة والجينات الوراثية، أما نسبة 50/50 فهي خاصة بالشخصية والطباع.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Nurture means life experience and environment. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "النص يعرف النشوء والتنشئة: 'Nurture means life experience and environment'.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Nature does not influence personality. (True / False)",
      "answer": "False (خطأ)",
      "explanation": "أثبت العلماء أن الطبيعة والجينات تؤثر بنسبة 50% في تشكيل الشخصية.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Many genes together probably form a characteristic. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "تتشارك عدة جينات معاً لصياغة سمة معينة كالسعادة أو الذكاء.",
      "tag": "امتحاني / دورات"
    },
    {
      "type": "qa",
      "question": "Birth order influences personality. (True / False)",
      "answer": "True (صحيح)",
      "explanation": "أكدت دراسة جامعة ستانفورد أن ترتيب الولادة في العائلة يؤثر مباشرة في سمات الشخصية.",
      "tag": "امتحاني / دورات"
    },

    // قواعد الفصل الأول الكاملة
    {
      "type": "h2",
      "prefix": "ثامناً:",
      "text": "قواعد الفصل الأول: الحاضر البسيط، الماضي البسيط، علامات الترقيم، وحروف الجر"
    },
    {
      "type": "callout",
      "variant": "important",
      "title": "قاعدة زمن الحاضر البسيط (Simple Present Tense)",
      "content": "يُستخدم الحاضر البسيط للتعبير عن: 1. الحقائق العامة والمواقف الثابتة (General or permanent situations). 2. العادات والأفعال المتكررة (Repeated actions). \n- نضيف (s/es) للفعل مع الفاعل المفرد الغائب (He, She, It, والاسم المفرد). \n- الأفعال الشاذة الرئيسية: verb (to be) يصبح (am, is, are)، و verb (to have) يصبح (have مع الجمع و has مع المفرد). \n- النفي: نستخدم do not (don't) مع الجمع و I، ونستخدم does not (doesn't) مع المفرد متبوعاً بالمصدر."
    },
    {
      "type": "table",
      "title": "جدول تصريف الأفعال مع المفرد الغائب (Third Person Singular -s)",
      "headers": ["الفعل المجرد", "التصريف مع المفرد (He/She/It)", "الفعل المجرد", "التصريف مع المفرد (He/She/It)"],
      "rows": [
        ["chase", "chases", "enjoy", "enjoys"],
        ["teach", "teaches", "grow", "grows"],
        ["learn", "learns", "do", "does"],
        ["play", "plays", "dance", "dances"],
        ["watch", "watches", "run", "runs"]
      ]
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "حل تمرين الحاضر البسيط التراكمي (Kim & Stacy — ص 18)",
      "content": "Kim and Stacy [are] non-identical twin sisters. They [look] similar, but they [have] very different interests. Kim [likes] sports. She [runs] almost every day. On weekends, she [plays] tennis or [goes] swimming. Stacy [does not like] sports. She [stays] up late and [watches] old movies on TV. On weekends, she [teaches] dancing to children. The sisters also have different personalities. Kim [is] outgoing and energetic. Stacy [is] careful and a little shy. But they [share] one characteristic: they both [are] often very happy."
    },
    {
      "type": "callout",
      "variant": "important",
      "title": "قاعدة زمن الماضي البسيط (Simple Past Tense)",
      "content": "يُستخدم الماضي البسيط لحدث بدأ وانتهى في الماضي قبل اللحظة الحالية: \n1. الأفعال النظامية: نضيف -ed إلى المصدر (work -> worked, change -> changed). \n2. الأفعال الشاذة: تحفظ تصاريفها غيباً (meet -> met, become -> became, give -> gave, see -> saw, wear -> wore). \n3. النفي: نستخدم did not (didn't) متبوعاً بالفعل بالمصدر المجرد."
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "حل تمرين قصة الأخ الأكبر بالماضي البسيط (Big Brother — ص 19)",
      "content": "My big brother [was] an important influence on me as a small child. I [followed] him everywhere. I [did] whatever he [did]. He [joined] the high school baseball team, so I [played] baseball with the kids at my school. One year, he [wore] cowboy boots, so I [wanted] the same boots. He [read] books, so I [tried] to read the same books. I probably [bothered] him a lot, but he [did not get] angry with me. When he [left] for college, he [gave] me his baseball glove. He [was] my hero."
    },
    {
      "type": "table",
      "title": "قواعد الترقيم مع أداة العطف And (Punctuation with 'And')",
      "headers": ["الحالة", "القاعدة", "مثال توضيحي"],
      "rows": [
        ["عطف كلمتين أو صفتين", "لا نضع أي فاصلة (No comma)", "He became rich and successful. / Mark and Gerald are twins."],
        ["عطف جملتين مستقلتين كاملتين", "نضع فاصلة قبل and (Comma before and)", "Ralph changed his name, and he began to design clothes."],
        ["سلسلة من ثلاثة عناصر أو أكثر", "نضع فاصلة بعد كل عنصر وقبل and", "She's a wife, mother, and friend. / jeans, boots, and suits."]
      ]
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "حروف الجر المقررة مع الكلمات التلازمية (Prepositions in Phrases)",
      "content": "احفظ التركيب وحرف الجر المقترن به: \n• influence ON (تأثير على) \n• interested IN (مهتم بـ) \n• different FROM (مختلف عن) \n• similar TO (مشابه لـ) \n• hero OF (بطل لـ) \n• form OF (شكل من أشكال) \n• combination OF (مزيج من) \n• afraid OF (خائف من) \n• stories ABOUT (قصص عن) \n• talk ABOUT (يتحدث عن)."
    },
    {
      "type": "qa",
      "question": "تصحيح الأخطاء السبعة الشائعة في فقرة أودري هيبورن (ص 21)",
      "answer": "1. an influence OF me -> an influence ON me (تصحيح حرف الجر). \n2. different OF people -> different FROM people (تصحيح حرف الجر). \n3. beautiful, and elegant -> beautiful and elegant (حذف الفاصلة الزائدة). \n4. She HAVE -> She HAD (تصحيح زمن الفعل للماضي). \n5. After I SEE her -> After I SAW her (تصحيح زمن الفعل للماضي). \n6. similar hers -> similar TO hers (إضافة حرف الجر to). \n7. lovely lady and I -> lovely lady, and I (إضافة فاصلة قبل and لوجود جملتين كاملتين).",
      "explanation": "هذا السؤال من أكثر الأسئلة نموذجية في الامتحانات الأكاديمية لاختبار إتقان قواعد الأزمنة وأدوات الربط والترقيم وحروف الجر.",
      "tag": "تمرين امتحاني هام جداً"
    },

    // -------------------------------------------------------------------------
    // الوحدة الثانية: Chapter 2: Personality and Learning
    // -------------------------------------------------------------------------
    {
      "type": "h1",
      "text": "الفصل الثاني: الشخصية والتعلّم (Chapter 2: Personality and Learning)",
      "badge": "الوحدة 2"
    },
    {
      "type": "h2",
      "prefix": "أولاً:",
      "text": "المصطلحات المهنية والتخصصات الجامعية (Know Yourself: Majors & Careers)"
    },
    {
      "type": "table",
      "title": "جدول التخصصات والمهن الجامعية المقررة (ص 31)",
      "headers": ["التخصص الجامعي (Major)", "المهنة المقابلة (Career)", "الترجمة والتوضيح"],
      "rows": [
        ["Biology", "Biologist", "علم الأحياء -> عالم أحياء"],
        ["Engineering", "Engineer", "الهندسة -> مهندس"],
        ["Medicine", "Doctor", "الطب البشري -> طبيب"],
        ["Theater Arts", "Actor", "فنون المسرح والتمثيل -> ممثل"],
        ["Education", "Teacher", "التربية والتعليم -> معلم / مدرس"],
        ["Music", "Musician", "الموسيقى -> عازف / موسيقار"],
        ["Journalism", "Journalist", "الإعلام والصحافة -> صحفي"]
      ]
    },
    {
      "type": "definitions",
      "title": "مفردات المقابلة والاستماع المقررة ( ص 32)",
      "items": [
        {
          "term": "depends (v.)",
          "definition": "it is not certain yet; relies on conditions (يعتمد على الظروف / غير مؤكد)",
          "example": "What are your plans? - It depends, I may stay home or go out."
        },
        {
          "term": "reduce (v.)",
          "definition": "make less or smaller in size/number (يقلل / يخفّض)",
          "example": "I have too much work; I need to reduce my hours."
        },
        {
          "term": "anxiety (n.)",
          "definition": "feeling of fear, worry, or nervousness (قلق / توتر نفسي)",
          "example": "All of these study problems are causing her a lot of anxiety."
        },
        {
          "term": "calm (adj.)",
          "definition": "peaceful; not nervous or excited (هادئ وساكن)",
          "example": "Joel is calm because he meditates quietly every morning."
        },
        {
          "term": "regularly (adv.)",
          "definition": "at regular times; repeatedly (بانتظام ودورية)",
          "example": "Do you exercise regularly? Yes, every Monday and Wednesday."
        }
      ]
    },

    // آليات المحادثة والاستماع
    {
      "type": "h2",
      "prefix": "ثانياً:",
      "text": "آليات الاستماع والمحادثة: النبرة، وقاعدة Like و Enjoy، والأشكال المختصرة"
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "قاعدة هامة جداً امتحانياً: الفرق بين الفعلين Like و Enjoy (ص 35)",
      "content": "• الفعل (like) يقبل بعده ثلاث حالات: \n1. اسم (Noun): I like music. \n2. اسم فاعل gerund (V+ing): I like listening to music. \n3. مصدر infinitive (to + verb): I like to listen to music. \n\n• أما الفعل (enjoy) فيقبل حالتين فقط: \n1. اسم (Noun): I enjoy movies. \n2. اسم فاعل gerund (V+ing): I enjoy going to the movies. \n⚠️ تنبيه امتحاني: يُمنع نهائياً استخدام to + verb مع enjoy! (لا تقل I enjoy to go!)."
    },
    {
      "type": "table",
      "title": "جدول الأشكال المختصرة في الكلام السريع (Reduced Forms of Words — ص 36)",
      "headers": ["الشكل الكامل (Long Form)", "الشكل المختصر الشفهي (Reduced Form)", "المعنى العربي"],
      "rows": [
        ["because", "cuz", "لأن / بسبب"],
        ["Excuse me.", "'Suse me.", "معذرة / عذراً"],
        ["I don't know.", "I dunno.", "لا أعلم / لست أدري"],
        ["What's your name?", "Whatcher name?", "ما اسمك؟"],
        ["What do you do?", "Whadaya do?", "ماذا تعمل؟ / ما مهنتك؟"],
        ["How do you spell that?", "Howdaya spell that?", "كيف تتهجى ذلك؟"],
        ["Could you repeat that?", "Cudja repeat that?", "هل يمكنك إعادة ما قلته؟"]
      ]
    },
    {
      "type": "callout",
      "variant": "info",
      "title": "أساليب طلب الإيضاح وطلب الإذن (Asking for Clarification & Permission)",
      "content": "• لطلب التوضيح (Clarification): Excuse me? / Sorry? / Could you repeat that? / What does that mean? \n• لطلب الإذن (Permission): May I borrow your pencil? / Can I close the door? / Could I see your class notes? \n• للرد بالموافقة: Sure / Yes / Yeah. \n• للتردد أو التفكير: Um, I'm not sure / Uh, it depends. \n• للرفض المهذب: Sorry, no / Nope."
    },

    // التوتر واستراتيجيات الدراسة
    {
      "type": "h2",
      "prefix": "ثالثاً:",
      "text": "التوتر والنصائح الدراسية وإعطاء الاقتراحات (Stress & Study Advice)"
    },
    {
      "type": "bilingual",
      "badge": "Listening & Speaking — Study Better, Not Harder",
      "english": "What are the physical effects of stress? Stress causes anxiety; it makes our heart beat faster, our hands shake, and our hands sweat. But is stress always bad? Not necessarily. What advice does the expert give students? The key is: 'You shouldn't study harder; you should study better.' To study better, be well organized, use time wisely, work with other students, learn to relax, and never be afraid to ask questions.",
      "arabic": "ما هي الآثار والأعراض الفيزيائية للتوتر؟ يسبب التوتر القلق، ويجعل دقات القلب تتسارع، والأيدي ترجف وتعرق. ولكن هل التوتر سيء دائماً؟ ليس بالضرورة. وما هي النصيحة التي يقدمها الخبير للطلاب؟ القاعدة الجوهرية هي: 'لا يجب أن تدرس بجهد مضاعف بل يجب أن تدرس بذكاء وأسلوب أفضل'. وللدراسة بأسلوب أفضل: كن منظماً، وأدر وقتك بحكمة، وادرس في مجموعات مع زملائك، وتعلم الاسترخاء، وإياك أن تخاف من طرح الأسئلة!",
      "notes": "لإعطاء النصيحة نستخدم should و shouldn't. لإعطاء الاقتراحات نستخدم can, could, might."
    },
    {
      "type": "table",
      "title": "مباني الجامعة والمقررات التابعة لها (ص 45)",
      "headers": ["المبنى الجامعي (Building)", "المقررات والعلوم التابعة له (Classes & Subjects)"],
      "rows": [
        ["Social Science Building (العلوم الاجتماعية)", "psychology (علم النفس), sociology (علم الاجتماع), anthropology (علم الإنسان)"],
        ["Physical Science Building (العلوم الفيزيائية)", "chemistry (الكيمياء), geology (الجيولوجيا), engineering (الهندسة)"],
        ["Humanities Building (العلوم الإنسانية)", "languages (اللغات), history (التاريخ), political science (العلوم السياسية)"],
        ["Life Science Building (علوم الحياة)", "biology (علم الأحياء), food science (علوم التغذية)"]
      ]
    },

    // -------------------------------------------------------------------------
    // الوحدة الثالثة: Chapter 3: Language Learning
    // -------------------------------------------------------------------------
    {
      "type": "h1",
      "text": "الفصل الثالث: تعلم اللغات والدماغ والذاكرة (Chapter 3: Language Learning)",
      "badge": "الوحدة 3"
    },
    {
      "type": "h2",
      "prefix": "أولاً:",
      "text": "النص القرائي الرئيسي: الدماغ والتعلم والذاكرة (The Brain, Learning, and Memory)"
    },
    {
      "type": "bilingual",
      "badge": "Reading — Paragraph 1: Eric Jensen's Book",
      "english": "New ways of teaching come and go. For a few years, one educational method is popular, and many teachers use it. Then a new approach—method—appears, and everything changes. So which ways are best? How can students learn fast and well? A new book looks at the human brain to answer these questions. Eric Jensen's Teaching with the Brain in Mind is an important book for any serious, creative teacher. Scientists know that genes determine 30-60 percent of the connections in our brain. Education and life experience determine the other 40-70 percent. We now know this: 'learning changes the brain.' In a rich environment, neurons—brain cells—grow new connections. People can become more intelligent. This is true of both children and adults.",
      "arabic": "تتوالى طرائق التدريس وتتغير عبر السنين؛ فلبضع سنوات تشيع طريقة تعليمية معينة ويعتمدها كثير من المدرسين، ثم يظهر مدخل أو أسلوب جديد فيتغير كل شيء. فأي الطرائق هي الفضلى؟ وكيف يتعلم الطلاب بسرعة وإتقان؟ يتناول كتاب جديد الدماغ البشري للإجابة عن هذه التساؤلات، وهو كتاب 'التعليم مع مراعاة الدماغ' للكاتب إريك جنسن، وهو مرجع هام لكل معلم مبدع وجاد. يدرك العلماء أن الجينات الوراثية تقرر ما بين 30 إلى 60 بالمئة من الروابط العصبية في أدمغتنا، في حين يحدد التعليم وتجارب الحياة النسبة المتبقية البالغة 40 إلى 70 بالمئة. ونحن نعلم يقيناً اليوم أن: 'التعلّم يغيّر الدماغ فعلياً'. ففي البيئة الغنية، تنمو تشابكات جديدة للخلايا العصبية (neurons)، ويستطيع الإنسان أن يزداد ذكاءً، وهذا ينطبق على الصغار والبالغين على حد سواء.",
      "notes": "approach = method (أسلوب/طريقة). neurons = brain cells (خلايا عصبية). البيئة والتعليم يحددان 40-70% من تشابك الدماغ."
    },
    {
      "type": "bilingual",
      "badge": "Reading — Paragraph 2: What is a Rich Environment?",
      "english": "What is a 'Rich' Environment? The main characteristic of a rich environment is stimulation—something new to experience such as a new movie, a new friend, new information, a new place—anything. The stimulation needs to be challenging—difficult, but not too difficult. With too little stimulation, students become bored. With too much stimulation, students give up—stop trying. According to Jensen, the 'best way to grow a better brain' is to have the challenge of a new problem to work on. It isn't important to the brain to find a solution—an answer to the problem; neurons grow because the brain is working to solve the problem, not because the solution is right or wrong.",
      "arabic": "ما هي 'البيئة الغنية' المحفزة للدماغ؟ السمة الجوهرية للبيئة الغنية هي التنشيط والتحفيز (stimulation)—أي خوض تجربة جديدة: كفيلم جديد، أو صديق جديد، أو معلومة جديدة، أو مكان جديد. ويجب أن يكون هذا التحفيز منطوياً على تحدٍ متوازن (challenging)—أي صعباً ولكن ليس مفرط الصعوبة؛ فإذا كان التحفيز شحيحاً يصاب الطلاب بالملل، وإذا كان مفرطاً يستسلم الطلاب ويتوقفون عن المحاولة! ووفقاً لجنسن، فإن 'أفضل طريقة لتطوير دماغ أفضل' هي مواجهة تحدي حل مشكلة جديدة؛ ولا يهم الدماغ في واقع الأمر أن يصل إلى حل المشكلة، فالروابط العصبية تنمو وتتشابك لمجرد بذل الجهد ومحاولة التفكير، وليس بناءً على صحة الحل أو خطئه!",
      "notes": "stimulation = something new to experience (تحفيز). challenging = difficult, but not too difficult (تحدٍ معتدل الصعوبة)."
    },
    {
      "type": "bilingual",
      "badge": "Reading — Paragraph 3: Memory and Mnemonics",
      "english": "Many people say, 'I have a bad memory. I can't remember people's names or words in a new language.' Jensen discusses different types of memory. One type is 'linguistic memory' of words, names, numbers, and textbook information. Our new understanding of the brain tells us this about linguistic memory: 'We remember best in chunks, not bits.' Chunks are bigger than bits. For example, a chunk is a group of words, a sentence, or a song. A bit is one letter, one word, or one note of music. One way to remember information in chunks is with mnemonics. A mnemonic is a technique to help the memory. Mnemonics are helpful because they are chunks. Another type of memory is physical memory. This kind of memory lasts a very long time. For example, most adults can still remember how to ride a bicycle many years after they first learned. The brain and body remember together.",
      "arabic": "يشكو كثير من الناس قائلين: 'ذاكرتي ضعيفة، ولا أكاد أحفظ الأسماء أو مفردات اللغة الجديدة'. يناقش جنسن أنواعاً مختلفة من الذاكرة: أحدها 'الذاكرة اللغوية' الخاصة بالكلمات والأرقام والمعلومات النصية. وتؤكد الدراسات الدماغية أننا: 'نتذكر بشكل أفضل في هيئة كتل (chunks) وليس وحدات صغيرة منفردة (bits)'. والكتلة أكبر من الوحدة المجردة، فهي عبارة عن جملة أو تعبير أو أغنية، بينما الوحدة حرف واحد أو نغمة واحدة. ومن أفضل وسائل الحفظ في هيئة كتل تقنيات الاستذكار والرموز الحفظية (mnemonics). وهناك نوع آخر هو 'الذاكرة الجسدية/الحركية' التي تدوم طويلاً جداً؛ كقدرة البالغين على قيادة الدراجة بعد سنوات من تعلمها؛ فالجسد والدماغ يتذكران معاً بتناغم.",
      "notes": "chunks: مجموعات وكتل لفظية. bits: وحدات مفردة صغيرة. mnemonic: تقنية مساعدة للذاكرة."
    },
    {
      "type": "table",
      "title": "أشهر تقنيات ورموز الاستذكار الواردة في المقرر (Common Mnemonics — ص 55)",
      "headers": ["المعلومة المراد حفظها", "الرمز أو الجملة الاستذكارية (Mnemonic)", "التفسير والشرح"],
      "rows": [
        [
          "طيف الألوان بالترتيب: Red, Orange, Yellow, Green, Blue, Indigo, Violet",
          "Roy G. Biv",
          "اسم رجل وهمي تمثل أحرفه الحرف الأول من كل لون بالترتيب"
        ],
        [
          "كواكب المجموعة الشمسية حسب البعد عن الشمس: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto",
          "My Very Educated Mother Just Sent Us Nine Pencils",
          "الحرف الأول من كل كلمة يرمز لاسم الكوكب بالترتيب"
        ],
        [
          "قاعدة إملائية لحرفي I و E",
          "I before E except after C",
          "يأتي الحرف I قبل E مثل (piece, movie) إلا بعد حرف C فيأتي العكس مثل (receive)"
        ]
      ]
    },

    // طرائق التدريس ومفرداتها
    {
      "type": "h2",
      "prefix": "ثانياً:",
      "text": "طرائق تدريس اللغات واستراتيجية القراءة بين قوسين (Parentheses)"
    },
    {
      "type": "definitions",
      "title": "مفردات طرائق التدريس المقررة للحفظ (ص 59)",
      "items": [
        {
          "term": "passage (n.)",
          "definition": "piece of writing or speech (فقرة أو نص مكتوب أو مقروء)",
          "example": "The students need to read one passage in the book."
        },
        {
          "term": "memorize (v.)",
          "definition": "learn by heart / remember without looking (يحفظ عن ظهر قلب)",
          "example": "Students memorize lists of new words."
        },
        {
          "term": "commands (n.)",
          "definition": "orders such as 'Stand up' or 'Open your book' (أوامر وتعليمات)",
          "example": "The teacher gives physical commands in the classroom."
        },
        {
          "term": "active (adj.)",
          "definition": "moving around and doing things; energetic (نشيط وحركي)",
          "example": "The students are very active; they move around and act."
        },
        {
          "term": "focus on (v.)",
          "definition": "pay close attention to; spend time on (يركز اهتمامه على)",
          "example": "Students focus on vocabulary rather than abstract rules."
        },
        {
          "term": "strategies (n.)",
          "definition": "techniques, methods, or plans to do something well (استراتيجيات وخطط)",
          "example": "These strategies help students understand new vocabulary."
        }
      ]
    },
    {
      "type": "table",
      "title": "مقارنة طرائق تدريس اللغة الإنجليزية الثلاث المقررة (Language Teaching Methods)",
      "headers": ["طريقة التدريس", "المفهوم وآلية التطبيق", "ماذا يفعل الطلاب في الصف؟"],
      "rows": [
        [
          "1. طريقة القواعد والترجمة (Grammar-Translation)",
          "طريقة تقليدية تركز على حفظ القواعد وترجمة النصوص الأدبية",
          "يحفظ الطلاب قوائم المفردات غيباً ويترجمون النصوص كلمة بكلمة بين اللغتين"
        ],
        [
          "2. الاستجابة الجسدية الكاملة (TPR - Total Physical Response)",
          "طريقة حركية قائمة على الاستماع وتنفيذ الأوامر بحركات جسدية",
          "يستمع الطلاب لأوامر المعلم الحركية (قف، افتح الكتاب، أشر إلى الباب) وينفذونها جسدياً دون ضغط للتحدث الفوري"
        ],
        [
          "3. المدخل المعجمي (The Lexical Approach)",
          "طريقة حديثة تركز على الكتل والتراكيب اللفظية الشائعة بدلاً من القواعد المجردة",
          "يتعلم الطلاب العبارات والتلازمات اللفظية (Chunks & Collocations) لاستخدامها مباشرة في التواصل"
        ]
      ]
    },

    // قواعد الفصل الثالث
    {
      "type": "h2",
      "prefix": "ثالثاً:",
      "text": "قواعد وكتابة الفصل الثالث: استخدام Or، والترقيم مع But، والكلمات بعد حروف الجر"
    },
    {
      "type": "callout",
      "variant": "important",
      "title": "قاعدة استخدام أداة الربط Or في النفي (ص 63)",
      "content": "تُستخدم (or) للربط بين فكرتين سلبيتين/منفيتين لتعطي معنى (ولا) دون تكرار النفي: \n• I don't read Swedish + I don't write Swedish = I don't read or write Swedish. \n• حل تمرين المقرر: \n1. I don't know Maria or Jen. \n2. Dad didn't make mistakes in grammar or spelling. \n3. We don't need to read Chapter 5 or Chapter 6. \n4. In that class, they don't practice listening or speaking. \n5. Julia doesn't have the class notes or know the assignment."
    },
    {
      "type": "callout",
      "variant": "important",
      "title": "قاعدة الترقيم مع أداة الربط But (ص 63)",
      "content": "تُستخدم (but) للتعبير عن التناقض: \n1. نضع فاصلة قبل but إذا تبعها فاعل وفعل (Subject + Verb): \n- I studied French, but I didn't study Greek. \n- Emma did Chapter 5, but she didn't do Chapter 6. \n2. لا نضع فاصلة قبل but إذا لم يتبعها فاعل وفعل كامل: \n- Most students like this exercise but not that one."
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "قاعدة الكلمات بعد حروف الجر (Words after Prepositions — ص 64)",
      "content": "1. القاعدة العامة: يتبع حرف الجر إما اسم (Noun) أو اسم فاعل gerund (V+ing): \n- a good method of [learning] English. \n- focus on [learning] vocabulary. \n- don't worry about [having] correct grammar. \n- interested in [learning] more. \n- strategies for [reading] well. \n\n2. الاستثناء: حرف الجر (to) يتبعه مصدر مجرد (Simple Base Verb): \n- need to [solve] / need to [be] / hope to [do] / read to [learn] / important to [practice]. \n\n3. استخدام By + Gerund للإجابة عن سؤال يبدأ بـ How (الكيفية): \n- How do students learn language? -> By [translating] it. \n- How do they learn vocabulary? -> By [memorizing] lists of new words."
    },

    // ورشة المفردات والامتحان الشامل
    {
      "type": "h2",
      "prefix": "رابعاً:",
      "text": "ورشة المفردات النهائية والأسئلة الامتحانية الشاملة (ص 71 - 72)"
    },
    {
      "type": "table",
      "title": "حل تمرين مطابقة المفردات والتعاريف الشامل (Vocabulary Matching)",
      "headers": ["الكلمة (Word)", "التعريف المطابق (Definition)", "الترجمة والمعنى"],
      "rows": [
        ["1. passage", "piece of writing or speech", "فقرة أو نص مكتوب/مقروء"],
        ["2. strategies", "ways or methods to do something well", "استراتيجيات وطرق متقنة"],
        ["3. commands", "orders", "أوامر وتعليمات"],
        ["4. inherit", "receive (from parents)", "يرث جينات من والديه"],
        ["5. identical", "exactly the same", "متطابق تماماً دون أدنى اختلاف"],
        ["6. similar", "almost the same", "متشابه إلى حد كبير"],
        ["7. whatever", "anything", "أي شيء مهما كان"],
        ["8. entertainment", "fun", "تسلية ومرح"],
        ["9. identity", "our idea of who we are", "هويتنا وفكرتنا عن حقيقة أنفسنا"],
        ["10. costumes", "clothes in a movie", "أزياء تمثيلية وملابس"]
      ]
    },
    {
      "type": "qa",
      "question": "حل أسئلة الصح والخطأ الشاملة من ورشة المفردات ( ص 71)",
      "answer": "1. On a multiple-choice exam, you write a paragraph. [False] (في خيارات متعددة لا نكتب فقرة). \n2. Albert Einstein was a scientist. [True] (آينشتاين عالم). \n3. Non-identical twins have the same genes. [False] (التوائم غير المتطابقة لا تملك نفس الجينات بل 50%). \n4. A shy person is a little afraid of other people. [True] (الخجول يتوتر ويهاب مواجهة الناس). \n5. A setting is a place. [True] (الـ setting هو المكان والزمان). \n6. A puzzle is physically difficult. [False] (الأحجية صعوبتها ذهنية وليست جسدية). \n7. You think with your brain. [True] (التفكير يتم بالدماغ). \n8. A mnemonic is a strategy to help you remember something. [True] (الرمز الاستذكاري تقنية للحفظ).",
      "explanation": "هذه الأسئلة تكررت حرفياً في امتحانات الفصول السابقة لاختبار المفاهيم العامة واللغوية.",
      "tag": "أسئلة امتحانية أساسية"
    },
    {
      "type": "callout",
      "variant": "exam_tip",
      "title": "حل تمرين حروف الجر التلازمية النهائي (ص 72)",
      "content": "• The exam will be different [from] the last exam. \n• It will be a combination [of] multiple-choice and short answer. \n• We need to focus [on] studying Chapter 2. \n• Uncle Armen was a big influence [on] me. \n• He told great stories [about] his favorite trips. \n• He wasn't afraid [of] anything."
    },
    {
      "type": "table",
      "title": "حل تمرين استبعاد الكلمة الشاذة أو الغريبة (Which Word Doesn't Belong? — ص 72)",
      "headers": ["مجموعة الكلمات", "الكلمة الشاذة (Odd Word)", "السبب والتعليل الأكاديمي"],
      "rows": [
        ["1. height, emotion, weight", "emotion", "لأن height و weight مقاييس جسدية، بينما emotion شعور"],
        ["2. story, plot, role", "role", "لأن story و plot متعلقان بالقصة وأحداثها، بينما role هو الدور الاجتماعي أو التمثيلي"],
        ["3. techniques, methods, thinks", "thinks", "لأن techniques و methods أسماء تعني طرائق وأساليب، بينما thinks فعل"],
        ["4. assign, respond, answer", "assign", "لأن respond و answer يعنيان الإجابة والرد، بينما assign يعني يكلف بمهمة"],
        ["5. upper class, middle class, English class", "English class", "لأن البقية طبقات اجتماعية واقتصادية، بينما English class حصة دراسية"],
        ["6. DNA, personality, genes", "personality", "لأن DNA و genes عناصر وراثية بيولوجية، بينما personality سمة نفسية"],
        ["7. challenging, difficult, easy", "easy", "لأن challenging و difficult يدلان على الصعوبة والتحدي، بينما easy يعني سهل"],
        ["8. material, short-answer, multiple-choice", "material", "لأن short-answer و multiple-choice أنماط أسئلة امتحانية، بينما material تعني مادة"]
      ]
    },

    // خلاصة المحاضرة والنتائج
    {
      "type": "summary",
      "title": "الخلاصة الأكاديمية الشاملة لمقرر لغة 3",
      "takeaways": [
        "الفصل الأول ركز على الهوية والتوائم، وقصة رالف لورين، ونظرية الطبيعة والتنشئة (50% جينات + 50% بيئة)، وقواعد الحاضر والماضي البسيط وحروف الجر.",
        "الفصل الثاني ركز على التخصصات والمهن الجامعية، وآليات التحدث والاستماع، والفرق الحاسم بين like و enjoy، والأشكال اللفظية المختصرة (Reduced forms).",
        "الفصل الثالث ركز على أبحاث الدماغ والتعلم لإريك جنسن، ومفهوم البيئة الغنية، وتقنيات الاستذكار (Mnemonics)، وطرائق تدريس اللغات الثلاث، وقواعد أداة الربط or و but وحروف الجر.",
        "جميع تمارين الكتاب والأسئلة الامتحانية تم إيرادها بحلول نموذجية وشروح دقيقة لضمان التفوق التام في الامتحان."
      ]
    }
  ]
};

const targetPath = path.resolve(__dirname, 'data.json');
fs.writeFileSync(targetPath, JSON.stringify(lectureData, null, 2), 'utf8');
console.log('Successfully written comprehensive study booklet to', targetPath);
