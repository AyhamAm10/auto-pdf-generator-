const fs = require('fs');
const path = require('path');

const elements = [
  // ---------------------------------------------------------------------------
  // عنوان المحاضرة الرئيسي
  // ---------------------------------------------------------------------------
  {
    "type": "h1",
    "text": "المحاضرة الأولى: عالم الإعلان (The World of Advertising)",
    "badge": "الوحدة 1"
  },

  // ===========================================================================
  // القسم الأول: التحضير للقراءة والأسئلة الاستيعابية التمهيدية (PREPARE TO READ)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "1.",
    "text": "التحضير للقراءة: أسئلة استيعابية تمهيدية (Prepare to Read)"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "إضاءة تمهيدية",
    "content": "هذه الأسئلة الاستيعابية تهدف لتهيئة الذهن وتحديد المفاهيم الأساسية حول الإعلان العالمي قبل الخوض في نصوص الوحدة. يجب دراستها وفهم أسباب الصحة والخطأ."
  },
  {
    "type": "qa",
    "question": "1. To sell a product in a foreign country, a company must translate its advertisement.\n(لبيع منتج في بلد أجنبي، يجب على الشركة أن تترجم إعلانها).",
    "answer": "False (خطأ) — لا يكفي مجرد ترجمة الإعلان؛ فالترجمة الحرفية قد تؤدي لأخطاء فادحة، بل تلجأ الشركات غالباً لكتابة إعلانات جديدة كلياً تراعي ثقافة وتقاليد البلد المستهدف."
  },
  {
    "type": "qa",
    "question": "2. International businesses such as McDonald's offer different products in different parts of the world.\n(تقدم الشركات الدولية مثل ماكدونالدز منتجات مختلفة في أنحاء مختلفة من العالم).",
    "answer": "True (صحيح) — تقوم الشركات العالمية بتكييف قوائم أطعمتها لتناسب الذوق المحلي (مثل تقديم النودلز في هاواي والجعة في ألمانيا ومخفوق الفاكهة في ماليزيا)."
  },
  {
    "type": "qa",
    "question": "3. When advertisers write an ad, their goal is to make people laugh.\n(عندما يكتب المعلنون إعلاناً، يكون هدفهم جعل الناس يضحكون).",
    "answer": "False (خطأ) — الهدف الجوهري والأول للمعلنين دائماً هو بيع المنتجات وتحقيق الأرباح (In the world of advertising, selling products is the most important goal)."
  },
  {
    "type": "qa",
    "question": "4. Laws about advertising are basically the same all over the world.\n(القوانين الخاصة بالإعلان هي نفسها بالأساس في كل أنحاء العالم).",
    "answer": "False (خطأ) — تختلف قوانين وأعراف الإعلان اختلافاً كبيراً بين الدول؛ فبعضها يمنع إعلانات الأحد أو إعلانات الأطفال أو إظهار بعض الملابس والحيوانات."
  },

  // ===========================================================================
  // القسم الثاني: مفردات الاستيعاب وتعاريفها مع نص التطبيق (VOCABULARY FOR COMPREHENSION)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "2.",
    "text": "مفردات الاستيعاب وتعاريفها المعتمدة (Vocabulary for Comprehension)"
  },
  {
    "type": "callout",
    "variant": "tip",
    "title": "ملاحظة امتحانية هامة حول المفردات والتعاريف",
    "content": "يأتي هذا النمط في الامتحان بشكل مطابقة بين الكلمة وتعريفها، أو إعطاء التعريف والمطالبة باختيار الكلمة المناسبة له من بين 4 خيارات (أو بالعكس)."
  },
  {
    "type": "table",
    "title": "جدول المفردات الأساسية وتعاريفها المعتمدة وترجمتها",
    "headers": ["الكلمة (Word)", "النوع", "التعريف بالإنكليزية (Definition)", "المعنى والترجمة بالعربية"],
    "rows": [
      ["a campaign", "اسم (n)", "a planned, organized effort", "حملة: جهد منظم ومخطط له ومحدد زمنياً لتحقيق غاية"],
      ["a competition", "اسم (n)", "an activity in which people try to do better than each other", "منافسة: نشاط يسعى فيه المتنافسون للتفوق على بعضهم"],
      ["the competition", "اسم (n)", "people or things that you compete against", "المنافسون: الأشخاص أو الشركات المنافسة لك في السوق"],
      ["to convince", "فعل (v)", "to make someone want to do something", "يُقنِع: يجعل شخصاً ما يرغب في فعل شيء ما أو الشراء"],
      ["to fail", "فعل (v)", "to not do well, to not reach your goal", "يفشل: ألا تبلي حسناً، وألا تبلغ هدفك المنشود"],
      ["a firm", "اسم (n)", "a company, a business", "شركة / منشأة: مشروع تجاري أو شركة تضم شركاء"],
      ["global", "صفة (adj)", "international, worldwide", "عالمي: دولي، يشمل كافة أنحاء العالم"],
      ["a goal", "اسم (n)", "something that people want to do / aim", "هدف: شيء يريد الناس تحقيقه أو الوصول إليه"],
      ["a market", "اسم (n)", "a group of people to whom products are sold", "سوق: شريحة أو مجموعة من الناس تُباع لهم المنتجات"],
      ["to market", "فعل (v)", "to try to sell a product to a certain group of people", "يُسوّق: يحاول بيع منتج لشريحة معينة من الزبائن"],
      ["a message", "اسم (n)", "information that one person / ad gives to another", "رسالة: معلومات أو فكرة يوجهها الإعلان للمستهلك"],
      ["to succeed", "فعل (v)", "to do well, to reach your goal", "ينجح: أن تبلي حسناً، وتصل إلى هدفك وتحققه"]
    ]
  },

  // --- نص تطبيق المفردات: Energy Plus ---
  {
    "type": "h2",
    "prefix": "3.",
    "text": "نص تطبيق المفردات: شركة إنرجي بلس (Energy Plus)"
  },
  {
    "type": "callout",
    "variant": "warning",
    "title": "تنبيه هام حول نص Energy Plus",
    "content": "نص مهم جداً في الامتحان: يجب دراسة النص وفهم سياق وضع الكلمات في الفراغات العشرة المحددة."
  },
  {
    "type": "bilingual",
    "badge": "Energy Plus — الفقرة الأولى",
    "english": "Energy Plus is a group of scientists, sports players, and business people. The members of this (1) firm are working together to make a new bottled water for people who exercise regularly. People who are interested in their health are also part of the (2) market for this product. The people at Energy Plus hope to make a product that tastes delicious. Their (3) goal is to finish making this product in one year.",
    "arabic": "إنرجي بلس هي مجموعة تضم علماء ولاعبين رياضيين ورجال أعمال. أعضاء هذه (1) الشركة (firm) يعملون معاً لإنتاج مياه معبأة جديدة مخصصة للأشخاص الذين يمارسون التمارين الرياضية بانتظام. كما أن المهتمين بصحتهم يمثلون أيضاً جزءاً من (2) السوق (market) المستهدفة لهذا المنتج. ويأمل القائمون على إنرجي بلس في تقديم منتج ذي مذاق لذيذ، حيث يتمثل (3) هدفهم (goal) في الانتهاء من تصنيع هذا المنتج خلال عام واحد.",
    "notes": "(1) firm = شركة | (2) market = السوق المستهدفة | (3) goal = الهدف."
  },
  {
    "type": "bilingual",
    "badge": "Energy Plus — الفقرة الثانية",
    "english": "Energy Plus bottled water will be advertised on television and in magazines. All the ads in this (4) campaign will begin on the same date, and they will all be similar. The (5) message of the ads will be that drinking plenty of water is very important for people who exercise. A large number of people in many countries will be interested in the drink.",
    "arabic": "سيتم الإعلان عن مياه إنرجي بلس المعبأة عبر التلفزيون وفي المجلات. وستنطلق جميع الإعلانات ضمن هذه (4) الحملة (campaign) في نفس الموعد وستكون كلها متشابهة. وستكون (5) رسالة (message) الإعلانات هي أن شرب كميات وافرة من الماء أمر بالغ الأهمية للأشخاص الذين يمارسون الرياضة، مما سيجعل عدداً غفيراً من الناس في بلدان كثيرة مهتمين بهذا المشروب.",
    "notes": "(4) campaign = حملة إعلانية | (5) message = الرسالة الإعلانية."
  },
  {
    "type": "bilingual",
    "badge": "Energy Plus — الفقرة الثالثة",
    "english": "The interest in this product will be (6) global. Energy Plus will provide a special telephone number to store owners to call and get information that will (7) convince them to sell Energy Plus in their stores. Several other groups are working on a similar product. Because of this (8) competition, the Energy Plus team plans to make the best product possible, and they hope to (9) succeed. If they (10) fail, they will need to rethink their ideas and develop a better plan.",
    "arabic": "سيكون الاهتمام بهذا المنتج اهتماماً (6) عالمياً (global). وستوفر شركة إنرجي بلس رقماً هاتفياً مخصصاً لأصحاب المتاجر للاتصال والحصول على معلومات من شأنها أن (7) تقنعهم (convince) ببيع إنرجي بلس في متاجرهم. هناك مجموعات تجارية أخرى تعمل على منتجات مماثلة، وبسبب هذه (8) المنافسة (competition)، يخطط فريق إنرجي بلس لتقديم أفضل منتج ممكن ويأملون في أن (9) ينجحوا (succeed). أما إن (10) فشلوا (fail)، فسيتعين عليهم إعادة النظر في أفكارهم ووضع خطة أفضل.",
    "notes": "(6) global = عالمي | (7) convince = تقنع | (8) competition = منافسة | (9) succeed = ينجحوا | (10) fail = يفشلوا."
  },
  {
    "type": "table",
    "title": "ملخص حل الفراغات العشرة لنص Energy Plus",
    "headers": ["رقم الفراغ", "الكلمة الصحيحة (Answer)", "المعنى بالعربية", "الدلالة والسياق"],
    "rows": [
      ["1", "firm", "الشركة", "The members of this firm are working together..."],
      ["2", "market", "السوق", "...part of the market for this product."],
      ["3", "goal", "الهدف", "Their goal is to finish making this product in one year."],
      ["4", "campaign", "الحملة", "All the ads in this campaign will begin on the same date..."],
      ["5", "message", "الرسالة", "The message of the ads will be that drinking water is important..."],
      ["6", "global", "عالمي", "The interest in this product will be global."],
      ["7", "convince", "تقنع", "...information that will convince them to sell..."],
      ["8", "competition", "المنافسة", "Because of this competition, the team plans to make the best..."],
      ["9", "succeed", "ينجحوا", "...and they hope to succeed."],
      ["10", "fail", "يفشلوا", "If they fail, they will need to rethink their ideas..."]
    ]
  },

  // ===========================================================================
  // القسم الثالث: النص القرائي الأول (READING 1: ADVERTISING ALL OVER THE WORLD)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مقطع القراءة الأول: الإعلان في جميع أنحاء العالم (Reading 1: Advertising All Over the World)",
    "badge": "Reading 1"
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 1: Jacko and the Energizer Bunny",
    "english": "How can a rabbit be stronger than a football hero? How can a rabbit be more powerful than a big, strong man? In the world of advertising, this is quite possible. Consider the example of Jacko. This great Australian football hero recently appeared on TV and yelled at the audience to buy products. Jacko's angry campaign worked well in Australia, so Energizer batteries invited him north to sell their product in the United States. But Jacko's yelling did not convince the American audience to buy batteries. So, good-bye, Jacko. Hello, Energizer Bunny, the little toy rabbit that has sold far more batteries than Jacko.",
    "arabic": "كيف يمكن لأرنب أن يكون أقوى من بطل كرة قدم؟ وكيف لأرنب أن يكون أشد تأثيراً من رجل ضخم وقوي؟ في عالم الإعلان، هذا الأمر وارد وممكن تماماً! خذ على سبيل المثال 'جاكو'؛ هذا البطل الأسترالي الشهير في كرة القدم ظهر مؤخراً على شاشات التلفاز وهو يصرخ في الجمهور ليحثهم على شراء المنتجات. لقد حققت حملة جاكو الغاضبة نجاحاً كبيراً في أستراليا، ولذلك دَعته شركة بطاريات إنرجايزر شمالاً إلى الولايات المتحدة ليروج لمنتجاتهم. لكن صراخ جاكو لم يقنع الجمهور الأمريكي بشراء البطاريات! وهكذا: وداعاً لجاكو، وأهلاً بأرنب إنرجايزر (Energizer Bunny)—دمية الأرنب الصغيرة اللطيفة التي باعت بطاريات تفوق بكثير ما باعه جاكو.",
    "notes": "yelled = صرخ | convince = يقنع | audience = الجمهور | hero = بطل."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 2: Translation Blunders (Braniff & Chevy Nova)",
    "english": "In the world of advertising, selling products is the most important goal. As companies are becoming more global, they are looking for new ways to sell their products all over the world. It is true that because of global communication, the world is becoming smaller today. But it is also true that the problems of global advertising—problems of language and culture—have become larger than ever. For example, Braniff Airlines wanted to advertise its fine leather seats. But when its advertisement was translated from English to Spanish, it told people that they could fly naked! Another example of incorrect translation is how Chevrolet tried to market the Chevy Nova in Latin America. In English, the word nova refers to a star. But in Spanish, it means 'doesn't go' (no va). Would you buy a car with this name?",
    "arabic": "في عالم الإعلان، يعد بيع المنتجات الهدف الأكثر أهمية على الإطلاق. ومع تزايد عولمة الشركات، باتت تبحث عن سبل جديدة لترويج منتجاتها حول العالم. وصحيح أنه بفضل وسائل الاتصال العالمية أضحى العالم أصغر اليوم، إلا أنه من الصحيح أيضاً أن مشكلات الإعلان العالمي—وهي مشكلات اللغة والثقافة—قد غدت أضخم من أي وقت مضى. فعلى سبيل المثال، أرادت شركة خطوط طيران 'برانيف' الإعلان عن مقاعدها الجلدية الفاخرة، ولكن عند ترجمة إعلانها من الإنكليزية إلى الإسبانية، أخبر الإعلان الركاب أن بإمكانهم الطيران وهم عراة تماماً! وثمة مثال آخر على الترجمة الخاطئة، وهو محاولة شركة شفروليه تسويق سيارتها 'شيفي نوفا' في أمريكا اللاتينية؛ ففي الإنكليزية تدل كلمة (Nova) على نجم ساطع، لكنها في الإسبانية تعني حرفياً 'لا تسير' (No va)! فهل ستشتري سيارة تحمل هذا الاسم؟!",
    "notes": "leather seats = مقاعد جلدية | fly naked = يسافرون عراة | Nova = نجم / لا تسير."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 3: Different Communication Styles",
    "english": "To avoid these problems of translation, most advertising firms are now beginning to write completely new ads. In writing new ads, global advertisers consider the different styles of communication in different countries. In some countries, the meaning of an advertisement is usually found in the exact words that are used to describe the product and to explain why it is better than the competition. This is true in such countries as the United States, Britain, and Germany. But in other cultures, such as Japan's, the message depends more on situations and feelings than it does on words.",
    "arabic": "لتفادي هذه المآزق الناجمة عن الترجمة، شرعت معظم وكالات الإعلان الآن في كتابة إعلانات جديدة كلياً. وعند صياغة إعلانات جديدة، يضع المعلنون العالميون في حسبانهم الأساليب المتنوعة للتواصل في البلدان المختلفة. ففي بعض البلدان، يكمن مغزى الإعلان عادة في الكلمات الدقيقة والمباشرة المستخدمة لوصف المنتج وتفسير سبب تفوقه على المنافسين؛ وهذا شأن بلدان مثل الولايات المتحدة وبريطانيا وألمانيا. غير أنه في ثقافات أخرى، كالثقافة اليابانية، تعتمد الرسالة الإعلانية على المواقف والمشاعر أكثر بكثير من اعتمادها على الكلمات اللفظية.",
    "notes": "communication styles = أساليب التواصل | exact words = الكلمات المباشرة والدقيقة | feelings = المشاعر."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 4: Japanese Commercials & Atmosphere",
    "english": "For this reason, the goal of many TV commercials in Japan will be to show how good people feel at a party or other social situation. The commercial will not say that a product is better than others. Instead, its goal will be to create a positive mood or feeling about the product.",
    "arabic": "لهذا السبب، فإن غاية الكثير من الإعلانات التلفزيونية في اليابان هي إظهار مدى سعادة الناس وشعورهم الرائع في حفلة أو مناسبة اجتماعية معينة. ولن يصرّح الإعلان أبداً بأن هذا المنتج يتفوق على غيره من المنتجات، بل سيكون هدفه هو إضفاء مزاج أو شعور إيجابي ممتع حيال المنتج.",
    "notes": "positive mood = مزاج إيجابي | social situation = مناسبة اجتماعية."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 5: Local Laws and Cultural Customs",
    "english": "Global advertisers must also consider differences in laws and customs. For instance, certain countries will not allow TV commercials on Sunday, and others will not allow TV commercials for children's products on any day of the week. In some parts of the world, it is forbidden to show dogs on television or certain types of clothing, such as jeans. The global advertiser who does not understand such laws and customs will have problems.",
    "arabic": "يتعين على المعلنين الدوليين أيضاً مراعاة الفروق في القوانين والأعراف المحلية. على سبيل المثال: لا تجيز بعض البلدان بث الإعلانات التلفزيونية يوم الأحد، ولا تسمح بلدان أخرى بإعلانات منتجات الأطفال في أي يوم من أيام الأسبوع! وفي أجزاء معينة من العالم، يُحظر تماماً إظهار الكلاب على شاشات التلفزيون أو عرض أزياء معينة كسراويل الجينز. والمعلن العالمي الذي يغفل عن فهم واستيعاب هذه القوانين والأعراف سيواجه مشاكل لا حصر لها.",
    "notes": "laws and customs = القوانين والأعراف | forbidden = ممنوع ومحظور."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 6: Adapting Products to Local Markets",
    "english": "Finally, there is the question of what to advertise. People around the world have different customs as well as different likes and dislikes. So the best advertisement in the world means nothing if the product is not right for the market. Even though some markets around the world are quite similar, companies such as McDonald's have found that it is very important to sell different products in different parts of the world. So, when you go to McDonald's in Hawaii, you'll find Chinese noodles on the menu. If you stop for a hamburger in Germany, you can order beer with your meal. In Malaysia, you can try a milkshake that is flavored with a fruit that most people in other countries have never tasted.",
    "arabic": "وأخيراً، هناك مسألة ما الذي يجب الإعلان عنه وتوفيره؛ فالناس حول العالم لديهم أعراف ورغبات وتفضيلات متباينة، لذا فإن أرقى إعلان في العالم لا قيمة له إن لم يكن المنتج ملائماً لسوقه. ورغم تشابه بعض الأسواق عالمياً، إلا أن شركات عملاقة مثل ماكدونالدز أدركت الأهمية البالغة لتسويق منتجات متباينة في بقاع مختلفة من العالم: فعندما ترتاد ماكدونالدز في هاواي، ستجد النودلز الصينية مدرجة في القائمة، وإذا توقفت لتناول الهمبرغر في ألمانيا، يمكنك طلب الجعة مع وجبتك، أما في ماليزيا، فبإمكانك تذوق مخفوق حليب منكه بفاكهة محلية لم يتذوقها معظم الناس في البلدان الأخرى إطلاقاً!",
    "notes": "likes and dislikes = ما يحبه الناس وما يكرهونه | right for the market = مناسب للسوق المستهدف."
  },
  {
    "type": "bilingual",
    "badge": "Reading 1 — Paragraph 7: Winning the Global Competition",
    "english": "All of these products must be sold with the right kind of message. It has never been an easy job for global advertisers to create this message. But no matter how difficult this job may be, it is very important for global advertisers to do it well. In today's competitive world, most new products quickly fail. Knowing how to advertise in the global market can help companies win the competition for success.",
    "arabic": "يجب تسويق وبيع جميع هذه المنتجات بالرسالة المناسبة الملائمة. ولم تكن صياغة هذه الرسالة يوماً بالمهمة اليسيرة على المعلنين العالميين، ولكن مهما بلغت صعوبة هذه المهمة، فمن الحيوي جداً أداؤها بإتقان وتميز. ففي عالم اليوم المتسم بشدة التنافسية، تفشل معظم المنتجات الجديدة سريعاً، ومعرفة أسرار وفنون الإعلان في السوق العالمية هو السبيل الأكيد لمساعدة الشركات على كسب رهان المنافسة وتحقيق النجاح الباهر.",
    "notes": "competitive world = عالم تنافسي | win the competition = كسب المنافسة."
  },

  // --- تمرين القراءة لأجل التفاصيل ---
  {
    "type": "h2",
    "prefix": "4.",
    "text": "تمارين بعد النص الأول: القراءة لأجل التفاصيل (Reading for Details)"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "صيغة السؤال في الامتحان",
    "content": "يأتي هذا التمرين في الامتحان على شكل إكمال جمل أو اختيار الكلمة الصحيحة لملء الفراغ من بين 4 خيارات استناداً إلى النص الأول."
  },
  {
    "type": "qa",
    "question": "1. A battery ......... changed its campaign from Jacko to the Energizer Bunny.\n(غيرت ......... بطاريات حملتها من جاكو إلى بوني إنرجايزر).",
    "answer": "company (شركة) — والعبارة كاملة: A battery company changed its campaign..."
  },
  {
    "type": "qa",
    "question": "2. There are many problems with ......... even with languages that are similar, such as English and Spanish.\n(هناك مشكلات جمّة في .........، حتى في اللغات المتشابهة كالإنكليزية والإسبانية).",
    "answer": "translation (الترجمة) — مشاكل الترجمة تقع حتى بين اللغات المتقاربة مثل الإسبانية والإنكليزية."
  },
  {
    "type": "qa",
    "question": "3. Different countries have different styles of ......... which involve different uses of words and feelings.\n(للبلدان المختلفة أساليب مختلفة في .........، والتي تتضمن استخدامات متباينة للكلمات والمشاعر).",
    "answer": "communicating (التواصل) — أساليب التواصل تختلف بين الاعتماد على الكلمات المباشرة أو المشاعر."
  },
  {
    "type": "qa",
    "question": "4. Some countries do not allow ......... ads for children's products.\n(بعض البلدان لا تسمح بإعلانات ......... الخاصة بمنتجات الأطفال).",
    "answer": "TV (التلفزيون) — لا تسمح بعض الدول ببث إعلانات الأطفال على التلفزيون في أي يوم."
  },
  {
    "type": "qa",
    "question": "5. Drinking beer with a meal is an example of a .........\n(شرب الجعة مع وجبة الطعام مثال على .........).",
    "answer": "custom (عُرف / تقليد محلي) — كما هو الحال في ألمانيا."
  },
  {
    "type": "qa",
    "question": "6. Many new products fail because there is a lot of ......... in the world today.\n(تفشل الكثير من المنتجات الجديدة لوجود قدر هائل من ......... في عالم اليوم).",
    "answer": "competition (المنافسة) — بسبب شدة المنافسة تفشل معظم المنتجات بسرعة."
  },
  {
    "type": "qa",
    "question": "7. The Chevy Nova campaign failed in Latin America because of the ......... of the ads.\n(فشلت حملة سيارة شيفي نوفا في أمريكا اللاتينية بسبب ......... الإعلانات).",
    "answer": "message (رسالة الإعلان) — حيث دل الاسم بالخطأ على أنها سيارة 'لا تسير'."
  },
  {
    "type": "qa",
    "question": "8. Ads that show a group of people sharing good feelings are often quite successful in .........\n(الإعلانات التي تعرض مجموعة من الناس يتبادلون مشاعر طيبة غالباً ما تنجح جداً في .........).",
    "answer": "Japan (اليابان) — لأن الثقافة اليابانية تركز على الأجواء والمشاعر الإيجابية لا على الكلمات التنافسية."
  },

  // ===========================================================================
  // القسم الرابع: مقطع القراءة الثاني (READING 2: CHANGING WORLD MARKETS)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مقطع القراءة الثاني: تغيّر الأسواق العالمية (Reading 2: Changing World Markets)",
    "badge": "Reading 2 — Adworld"
  },
  {
    "type": "callout",
    "variant": "warning",
    "title": "مقال بقلم جوليا روس (من مجلة عالم الإعلان Adworld)",
    "content": "مقطع القراءة الثاني في غاية الأهمية والتركيز في الامتحانات، ويناقش تجارب الإعلان في أمريكا والصين وروسيا."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 1: Commercials in USA vs. France and Spain",
    "english": "Good morning. It's good to be here with you all. My goal today is to give you some information about changing world markets. Let's start by looking at the U.S.A. Can you think of a country with more advertising than the United States? Think about watching a movie on TV. You're waiting for the good guy to get the bad guy, and suddenly there's a commercial. A few minutes later the good guy is in trouble, and you're interrupted by another commercial. Message after message. It's not like that in other countries. In places like France and Spain, you can watch at least a half hour of the program before a commercial interruption. And then the commercials will come all in a row.",
    "arabic": "طاب صباحكم جميعاً، ويسعدني تواجدي معكم اليوم. هدفي اليوم هو إعطاؤكم بعض المعلومات حول تحولات الأسواق العالمية وتغيراتها. دعونا نبدأ بإلقاء نظرة على الولايات المتحدة الأمريكية؛ هل يمكنكم التفكير في أي بلد يحتوي على إعلانات تجارية أكثر من أمريكا؟ تأملوا مثلاً مشاهدة فيلم على التلفزيون: تكونون في ترقب وتشوق لرؤية البطل الصالح وهو يقبض على الشرير، وفجأة يقاطعكم إعلان تجاري! وبعد بضع دقائق يتعرض البطل لمأزق، ليقاطعكم إعلان تجاري آخر! رسالة تتلوها رسالة.. الأمر مختلف تماماً في بلدان أخرى؛ ففي فرنسا وإسبانيا، يمكنك متابعة نصف ساعة على الأقل من البرنامج دون أي مقاطعة إعلانية، وعندها تأتي الإعلانات مجتمعة كلها دفعة واحدة تلو الأخرى.",
    "notes": "all in a row = دفعة واحدة تلو الأخرى | interrupted = يُقاطَع | commercial = إعلان تلفزيوني."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 2: China — Patience and Planning",
    "english": "China is a different story. For years any kind of commercial advertising was illegal. Government advertising was all over the place, but business advertising was nonexistent. Then Sony came along and changed things. The Japanese companies were the first to start advertising in China. They've led the way for others to come into the country. We can learn something from them, too. It's important not to come in overnight and start advertising because that can lead to serious mistakes. Advertisers must take their time and plan their campaigns carefully. Because there are millions of people in China who don't know what a Big Mac is, you wouldn't want to rush over there and try to sell them one. Instead, you would want to plan ahead five or ten years. It pays to be patient in China.",
    "arabic": "أما الصين، فهي حكاية أخرى تماماً؛ فعلى مدى سنوات طويلة، كان أي شكل من أشكال الإعلانات التجارية غير قانوني إطلاقاً. كانت الإعلانات الحكومية منتشرة في كل مكان، بينما انعدم وجود الإعلانات التجارية تماماً. ثم جاءت شركة سوني اليابانية وبدلت مجرى الأمور، حيث كانت الشركات اليابانية السباقة في تدشين الإعلانات في الصين، ومهدت الطريق للآخرين لدخول البلاد. ويمكننا أن نتعلم درساً بليغاً منها: من الخطر الدخول فجأة بين ليلة وضحاها والبدء بالإعلان لأن ذلك يوقع في أخطاء جسيمة. على المعلنين أن يتأنوا ويخططوا لحملاتهم بعناية فائقة؛ فنظراً لوجود مئات الملايين في الصين ممن لا يعرفون أصلاً ما هي شطيرة 'بيغ ماك'، فلن ترغب بالتسرع والهرولة لبيعهم إياها، بل ينبغي التخطيط المسبق لخمس أو عشر سنوات قادمة. الصبر في الصين يؤتي ثماره دائماً.",
    "notes": "come in overnight = الدخول بسرعة بين ليلة وضحاها | take their time = يتأنون | all over the place = منتشر في كل مكان."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 3: Russia and the Fast-Food Culture",
    "english": "Now in Russia, you would have to think about your product and whether or not there's a market for it. Fast food, for example, is a very strange idea in Russia. In their restaurants, you sit down and the waiter brings you soup, salad, meat, and potatoes—one thing at a time. The Russians think of food as something you take your time with, something you enjoy.",
    "arabic": "والآن في روسيا، سيتعين عليك التفكير ملياً في منتجك وما إذا كان له سوق أصلاً أم لا. فالوجبات السريعة (Fast food)، على سبيل المثال، تُعد فكرة غريبة جداً في الثقافة الروسية؛ حيث تجلس في مطاعمهم ليحضر لك النادل الحساء، ثم السلطة، ثم اللحم، فالأطباق الأخرى—طبقاً تلو الآخر على مهل. فالروس ينظرون إلى الطعام على أنه تجربة تستغرق فيها وقتك وتستمتع بها على راحتك.",
    "notes": "fast food = وجبات سريعة | strange idea = فكرة غريبة | take your time with = تتأنى بها وتأخذ وقتك."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 4: The Moscow Pizza Experience",
    "english": "What happened with pizza in Russia is a very funny story. First, they had to convince people to try it, and they had to explain that it was similar to Russian vatrushka. Then the Pizzeria restaurant opened up in Moscow. The Russians may have liked it all right, but Pizzeria didn't go over too well with foreign visitors because the pizza didn't always have enough tomato sauce and cheese! Another problem was that if you wanted to take the pizza home with you, the chef wouldn't hear of it. He didn't want it to get cold. When you're dealing with international markets, you're dealing with other customs, and cultures.",
    "arabic": "وما جرى مع البيتزا في روسيا قصة طريفة حقاً؛ ففي البداية، توجب عليهم إقناع الروس بتجربتها، واضطروا لأن يوضحوا لهم أنها تشبه معجنات 'الفاتروشكا' الروسية التقليدية. ثم افتتح مطعم بيتزيريا في موسكو؛ وربما نال استحسان الروس، بيد أن المطعم لم يلقَ قبولاً لدى الزوار والسياح الأجانب لأن البيتزا لم تكن تحوي صلصة طماطم وجبناً كافيين! وكانت هناك مشكلة أخرى، وهي أنك إن رغبت في أخذ البيتزا سفري إلى منزلك، فإن الطاهي (الشيف) كان يرفض رفضاً قاطعاً سماع ذلك، لكونه لا يقبل أن تبرد البيتزا! فعندما تتعامل مع الأسواق الدولية، فأنت تتعامل مع أعراف وثقافات وتقاليد متباينة.",
    "notes": "vatrushka = فطيرة روسية تقليدية | didn't go over too well = لم تنجح ولم تلق قبولاً | wouldn't hear of it = يرفض بشدة."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 5: Look at the Big Picture",
    "english": "But things are changing every day. New markets are opening up all the time. We have to look at the big picture before we start planning a campaign. We need to think about our product. Will people be able to buy it? Regarding our marketing plan, will people understand it? Remember that for years in China and Russia, people had a hard time buying things. The best advertisement of all was a long line in front of a store. That's how people knew which store was the place to go. So, we must think about how things are changing if we expect to be successful. I appreciate your attendance today. It's been a pleasure to be with you.",
    "arabic": "ولكن الأمور تتغير كل يوم؛ فالأسواق الجديدة تفتح أبوابها باستمرار. وعلينا دوماً النظر إلى 'الصورة الكلية' (look at the big picture) قبل الشروع في التخطيط لأي حملة تسويقية. نحن بحاجة للتفكير في منتجنا: هل سيقدر الناس على شرائه؟ وفي خطتنا التسويقية: هل سيفهمها الناس؟ تذكروا أنه لسنوات طوال في الصين وروسيا، كان الناس يلقون مشقة وصعوبة بالغة في شراء السلع، وكان أفضل إعلان على الإطلاق هو رؤية طابور طويل يصطف أمام متجر؛ فبذلك فقط يعرف الناس وجهتهم المقصودة. لذا، يتوجب علينا فهم مجريات التحول إذا ما أردنا إحراز النجاح. أشكر لكم حضوركم واهتمامكم اليوم، ولقد سررت بتواجدي معكم.",
    "notes": "look at the big picture = النظر إلى الصورة الكلية والوضع العام | had a hard time = عانوا من صعوبة ومشقة."
  },

  // ===========================================================================
  // القسم الخامس: التركيز على المفردات والمصطلحات (FOCUS ON VOCABULARY & IDIOMS)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "5.",
    "text": "التركيز على المفردات: استبعاد الكلمة غير المرادفة (Synonyms Exercise)"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "طريقة التمرين ونمطه الامتحاني",
    "content": "في كل جملة هناك 4 خيارات، ثلاثة منها مترادفات للكلمة التي تحتها خط، وخيار واحد فقط ليس مرادفاً (شاذ). المطلوب استبعاد الكلمة غير المرادفة (Cross out the word that is NOT a synonym)."
  },
  {
    "type": "qa",
    "question": "1. The goal of the advertising campaign was to sell more cars to women.\n(الكلمة المستهدفة: goal = هدف، غاية)\na. a purpose (غاية) | b. a plan (خطة) | c. a hope (أمل) | d. a future (مستقبل)",
    "answer": "الكلمة الشاذة غير المرادفة: d. future (المستقبل) — لأن purpose و plan و hope تعبر عن الهدف المرجو تحقيقه، بينما future تعني المستقبل."
  },
  {
    "type": "qa",
    "question": "2. Women with young children are part of a growing market.\n(الكلمة المستهدفة: market = شريحة من المشترين/السوق)\na. group of people | b. group of stores | c. group of buyers | d. group of customers",
    "answer": "الكلمة الشاذة غير المرادفة: b. group of stores (مجموعة متاجر) — لأن market هنا تعني شريحة الزبائن والمشترين (people, buyers, customers) وليست المتاجر."
  },
  {
    "type": "qa",
    "question": "3. The ad's message was that the new cars were safe.\n(الكلمة المستهدفة: message = رسالة الإعلان، فكرته)\na. idea (فكرة) | b. style (أسلوب) | c. information (معلومات) | d. story (قصة/مضمون)",
    "answer": "الكلمة الشاذة غير المرادفة: b. style (الأسلوب) — لأن رسالة الإعلان تعني فكرته ومحتواه ومغزاه (idea, information, story)."
  },
  {
    "type": "qa",
    "question": "4. The ads were successful because many women believed in the safety of the cars.\n(الكلمة المستهدفة: successful = ناجحة، فعالة، مقنعة)\na. effective (فعالة) | b. satisfactory (مرضية) | c. certain (متأكدة) | d. convincing (مقنعة)",
    "answer": "الكلمة الشاذة غير المرادفة: c. certain (متأكد) — لأن نجاح الإعلان يعني أنه كان فعالاً ومرضياً ومقنعاً (effective, satisfactory, convincing)."
  },
  {
    "type": "qa",
    "question": "5. As a result, the ads convinced mothers to buy the cars.\n(الكلمة المستهدفة: convinced = أقنعت، دفعت برغبة)\na. encouraged (شجعت) | b. persuaded (أقنعت) | c. pushed (دفعت) | d. forced (أجبرت)",
    "answer": "الكلمة الشاذة غير المرادفة: d. forced (أجبرت بالإكراه) — فالإقناع يتم بالترغيب والتشجيع والدفع للشراء (encouraged, persuaded, pushed) وليس بالإجبار القسري."
  },
  {
    "type": "qa",
    "question": "6. However, the ads failed to sell cars to single women without children.\n(الكلمة المستهدفة: failed to sell = فشلت في البيع، لم تبع)\na. didn't sell | b. couldn't sell | c. were unable to sell | d. tried to sell",
    "answer": "الكلمة الشاذة غير المرادفة: d. tried to sell (حاولت أن تبيع) — لأن الفشل في البيع يعني عدم تحققه مطلقاً (didn't sell, couldn't sell, were unable to sell)."
  },
  {
    "type": "qa",
    "question": "7. The advertising campaign will become global next year.\n(الكلمة المستهدفة: global = عالمية، دولية)\na. multinational (متعددة القوميات) | b. worldwide (حول العالم) | c. organized (منظمة) | d. international (دولية)",
    "answer": "الكلمة الشاذة غير المرادفة: c. organized (منظمة) — لأن global ترادف الدولية والعالمية (multinational, worldwide, international)."
  },
  {
    "type": "qa",
    "question": "8. Ads for the competition will not become global.\n(الكلمة المستهدفة: the competition = المنافسون، الشركات المنافسة)\na. race (سباق) | b. other companies (الشركات الأخرى) | c. other sellers (البائعون الآخرون) | d. different firms (المؤسسات المختلفة)",
    "answer": "الكلمة الشاذة غير المرادفة: a. race (سباق) — لأن the competition تعني هنا المنافسين في السوق كشركات وبائعين (companies, sellers, firms)."
  },

  // --- المصطلحات والتعبيرات الاصطلاحية (Idioms) ---
  {
    "type": "h2",
    "prefix": "6.",
    "text": "المصطلحات والتعبيرات الاصطلاحية (Idioms)"
  },
  {
    "type": "callout",
    "variant": "tip",
    "title": "ما هو التعبير الاصطلاحي (Idiom)؟",
    "content": "الـ Idiom هو عبارة تتكون من مجموعة كلمات تحمل مجتمعةً معنى خاصاً ومجازياً يختلف تماماً عن المعنى الحرفي لكل كلمة منفردة. يأتي في الامتحان كمطابقة أو اختيار من متعدد."
  },
  {
    "type": "table",
    "title": "جدول المصطلحات الاصطلاحية الـ 8 ومعانيها الدقيقة",
    "headers": ["المصطلح (Idiom)", "المعنى بالإنكليزية (Meaning)", "المعنى والترجمة بالعربية"],
    "rows": [
      ["all in a row", "one after another", "الواحد تلو الآخر / تباعاً دون انقطاع"],
      ["all over the place", "very common / everywhere", "منتشر في كل مكان / شائع جداً"],
      ["come in overnight", "enter quickly / suddenly", "يدخل بسرعة وفجأة بين ليلة وضحاها"],
      ["take their time", "be careful / not rush", "يتأنون / يأخذون وقتهم بحذر ودقة"],
      ["didn't go over too well", "did not succeed / unaccepted", "لم يلقَ قبولاً / لم ينجح"],
      ["wouldn't hear of it", "said 'no' strongly / refused", "رفض بشدة / أبى سماع ذلك تماماً"],
      ["look at the big picture", "consider the general situation", "ينظر للصورة الكلية والوضع العام الشامل"],
      ["had a hard time", "had difficulty / struggled", "واجه صعوبة ومشقة بالغة"]
    ]
  },
  {
    "type": "qa",
    "question": "1. In places like France and Spain... the commercials come all in a row.\n(في أماكن كفرنسا وإسبانيا تأتي الإعلانات الواحد تلو الآخر).",
    "answer": "all in a row = one after another (الواحد بعد الآخر)."
  },
  {
    "type": "qa",
    "question": "2. Government advertising was all over the place, but business advertising was nonexistent.\n(كانت الإعلانات الحكومية منتشرة في كل مكان، بينما انعدمت الإعلانات التجارية).",
    "answer": "all over the place = very common / everywhere (شائع جداً وفي كل مكان)."
  },
  {
    "type": "qa",
    "question": "3. It's important not to come in overnight and start advertising...\n(من المهم عدم الدخول بين ليلة وضحاها والبدء بالإعلان لأن ذلك يوقع في أخطاء).",
    "answer": "come in overnight = enter quickly (الدخول بسرعة وعلى عجل)."
  },
  {
    "type": "qa",
    "question": "4. Advertisers must take their time and plan their campaigns carefully.\n(يجب على المعلنين أن يتأنوا ويخططوا لحملاتهم بعناية).",
    "answer": "take their time = be careful (يتأنون ويكونون حريصين)."
  },
  {
    "type": "qa",
    "question": "5. The Russians may have liked it... but Pizzeria didn't go over too well with foreign visitors...\n(ربما أحبها الروس، لكن مطعم بيتزيريا لم يلق قبولاً لدى الزوار الأجانب).",
    "answer": "didn't go over too well = did not succeed (لم ينجح ولم يلق رواجاً)."
  },
  {
    "type": "qa",
    "question": "6. If you wanted to take the pizza home with you, the chef wouldn't hear of it.\n(إذا أردت أخذ البيتزا لمنزلك، فإن الطاهي كان يرفض سماع ذلك قطعياً).",
    "answer": "wouldn't hear of it = said 'no' strongly (رفض بشدة وقال 'لا' قاطعة)."
  },
  {
    "type": "qa",
    "question": "7. We have to look at the big picture before we start planning a campaign.\n(علينا النظر إلى الصورة الكلية قبل أن نبدأ بالتخطيط للحملة).",
    "answer": "look at the big picture = consider the general situation (مراعاة الوضع العام والبيئة الشاملة)."
  },
  {
    "type": "qa",
    "question": "8. Remember that for years in China and Russia, people had a hard time buying things.\n(تذكروا أنه لسنوات في الصين وروسيا، كان الناس يلقون مشقة في شراء السلع).",
    "answer": "had a hard time = had difficulty (واجهوا صعوبة ومشقة)."
  },

  // ===========================================================================
  // القسم السادس: مهارات الكتابة (FOCUS ON WRITING: PARAGRAPH DEVELOPMENT)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مهارات الكتابة: بنية وتطوير الفقرة (Paragraph Development)",
    "badge": "Writing Skills"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "القواعد الثلاث لبناء الفقرة الأكاديمية",
    "content": "تقدم الفقرة الإنجليزية عادةً فكرة رئيسية واحدة، وتتكون من ثلاثة عناصر أساسية:\n1. الجملة الافتتاحية (Topic Sentence): تذكر الفكرة الرئيسية وتأتي غالباً أول جملة في الفقرة.\n2. الجمل الداعمة والأمثلة (Supporting Sentences): تدعم الفكرة الرئيسية بأمثلة وتفاصيل محددة.\n3. الجملة الختامية (Concluding Sentence): تأتي في نهاية الفقرة وتكرر أو تعيد صياغة الكلمات المفتاحية للجملة الافتتاحية."
  },
  {
    "type": "bilingual",
    "badge": "الفقرة التطبيقية للتحليل",
    "english": "Global advertisers must also consider differences in laws and customs. For instance, certain countries will not allow TV commercials on Sunday, and others will not allow TV commercials for children's products on any day of the week. In some parts of the world, it is forbidden to show dogs on television or certain types of clothing, such as jeans. The global advertiser who does not understand such laws and customs will have problems.",
    "arabic": "يجب أن يفكر المعلنون العالميون أيضاً بالاختلافات في القوانين والأعراف. على سبيل المثال: لا تسمح بلدان معينة بالإعلانات التلفزيونية يوم الأحد، ولا تسمح بلدان أخرى بالإعلانات التلفزيونية عن منتجات الأطفال في أي يوم من أيام الأسبوع. وفي بعض أجزاء العالم، يُحظر إظهار الكلاب في التلفزيون أو أنواع معينة من الملابس كسراويل الجينز. والمعلن العالمي الذي لا يستوعب مثل هذه القوانين والأعراف سيواجه المشاكل.",
    "notes": "نموذج مثالي لتحليل عناصر الفقرة الأكاديمية."
  },
  {
    "type": "table",
    "title": "تفكيك عناصر الفقرة النموذجية",
    "headers": ["عنصر الفقرة", "الجملة بالإنكليزية", "الوظيفة والترجمة"],
    "rows": [
      ["Topic Sentence (الجملة الافتتاحية)", "Global advertisers must consider differences in laws and customs.", "تطرح الفكرة الرئيسية: وجوب مراعاة الفروق في القوانين والأعراف."],
      ["Example 1 (المثال الأول)", "Some countries do not allow TV advertisements on Sunday.", "مثال داعم: حظر الإعلانات يوم الأحد."],
      ["Example 2 (المثال الثاني)", "Other countries never allow TV advertisements for children's products.", "مثال داعم: حظر إعلانات منتجات الأطفال."],
      ["Example 3 (المثال الثالث)", "In some parts of the world, dogs and jeans cannot be shown on television.", "مثال داعم: حظر عرض الكلاب وملابس الجينز."],
      ["Concluding Sentence (الجملة الختامية)", "The global advertiser who does not understand such laws and customs will have problems.", "تختم الفقرة وتعيد تأكيد الكلمات المفتاحية (laws and customs)."]
    ]
  },
  {
    "type": "qa",
    "question": "1. Where is the main idea? Underline it.\n(أين هي الفكرة الرئيسية؟)",
    "answer": "In the Topic Sentence (الجملة الأولى): 'Global advertisers must also consider differences in laws and customs.'"
  },
  {
    "type": "qa",
    "question": "2. Where are the examples? Underline them.\n(أين توجد الأمثلة الداعمة؟)",
    "answer": "الأمثلة هي الجمل الثلاث الوسطى التي تذكر أمثلة منع إعلانات الأحد، ومنع إعلانات الأطفال، ومنع الكلاب والجينز."
  },
  {
    "type": "qa",
    "question": "3. How many examples are there?\n(كم مثالاً ورد في هذه الفقرة؟)",
    "answer": "Three examples (ثلاثة أمثلة محددة)."
  },

  // ===========================================================================
  // القسم السابع: القواعد (GRAMMAR: SIMPLE PRESENT VS. PRESENT PROGRESSIVE)
  // ===========================================================================
  {
    "type": "h1",
    "text": "القواعد: الحاضر البسيط والحاضر المستمر (Simple Present and Present Progressive)",
    "badge": "Grammar"
  },
  {
    "type": "callout",
    "variant": "warning",
    "title": "قاعدة ذهبية في الامتحان",
    "content": "يجب فهم القواعد جيداً والتركيز على مفاتيح الحل والأمثلة؛ فغالباً ما تأتي جمل الامتحان مطابقة لنصوص هذه الأمثلة ويُطلب اختيار الزمن المناسب للفعل."
  },
  {
    "type": "table",
    "title": "مقارنة شاملة بين الحاضر البسيط والحاضر المستمر",
    "headers": ["وجه المقارنة", "الحاضر البسيط (Simple Present)", "الحاضر المستمر (Present Progressive)"],
    "rows": [
      ["الصيغة (Form)", "فعل بالتصريف الأول V1 (مع s/es للفاعل المفرد)", "am / is / are + V-ing"],
      ["الاستخدام الأساسي", "الحقائق، العادات، ما يحدث عادة أو دائماً أو أحياناً", "أفعال وأحداث تقع الآن في لحظة الكلام، أو اتجاهات وتغيرات معاصرة"],
      ["الظروف الدالة (Key Words)", "always, usually, often, sometimes, rarely/seldom, never", "now, today, nowadays, these days, this month, this year, at the moment"],
      ["أفعال الحالة (Non-action verbs)", "تُستخدم حصراً في الحاضر البسيط ولا تأتي في المستمر مطلقاً (feelings, emotions, mental states)", "لا يمكن استخدام أفعال الحالة في صيغة المستمر (مثل believe, know, consider)"]
    ]
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "أمثلة هامة على أفعال الحالة (Non-action Verbs)",
    "content": "تصف أفعال الحالة العواطف والحالات الذهنية والأوضاع الثابتة، ومن أمثلتها المقررة:\n• عاطفة (Emotion): I appreciate your attendance today. (أقدّر حضوركم اليوم).\n• حالة ذهنية (Mental state): MasterCard knows that family values have an international appeal. (تعلم ماستركارد أن للقيم العائلية جاذبية دولية).\n• وضع عام (Situation): Fast food is a very strange idea in Russia. (الوجبات السريعة فكرة غريبة جداً في روسيا)."
  },
  {
    "type": "h2",
    "prefix": "7.",
    "text": "تمرين القواعد: اختيار صيغة الفعل الصحيحة (Verb Tense Exercise)"
  },
  {
    "type": "qa",
    "question": "1. Many people (believe / are believing) that there is nothing wrong with eating fast food once in a while.\n(يعتقد الكثيرون أنه لا ضير في تناول الوجبات السريعة بين الحين والآخر).",
    "answer": "believe (حاضر بسيط) — لأن الفعل believe من أفعال الحالة والإدراك الذهني (non-action / mental state verb) ولا يأتي في صيغة المستمر."
  },
  {
    "type": "qa",
    "question": "2. The number of fast-food restaurants around the world (increase / is increasing).\n(عدد مطاعم الوجبات السريعة في أنحاء العالم يتزايد باستمرار).",
    "answer": "is increasing (حاضر مستمر) — لأن الجملة تعبر عن اتجاه وظاهرة متغيرة ومستمرة في وقتنا الحاضر (current trend / changing situation)."
  },
  {
    "type": "qa",
    "question": "3. These restaurants usually (serve / are serving) different foods in different parts of the world.\n(تقدم هذه المطاعم عادة أطعمة مختلفة في مختلف بقاع العالم).",
    "answer": "serve (حاضر بسيط) — لوجود ظرف التكرار usually الذي يدل على عادة وروتين متكرر."
  },
  {
    "type": "qa",
    "question": "4. Many people (consider / are considering) McDonald's to be an excellent example of a successful global restaurant.\n(يعتبر الكثيرون شركة ماكدونالدز نموذجاً ممتازاً للمطعم العالمي الناجح).",
    "answer": "consider (حاضر بسيط) — لأن الفعل consider هنا يعني 'يعتقد / يرى' وهو فعل حالة ورأي لا يقبل الاستمرار."
  },
  {
    "type": "qa",
    "question": "5. Now, advertising firms (write / are writing) different ads for different countries because of the styles of communication.\n(الآن، تكتب وكالات الإعلان إعلانات متباينة لمختلف البلدان بسبب أساليب التواصل).",
    "answer": "are writing (حاضر مستمر) — لوجود الدلالة الزمنية الصريحة Now (الآن)."
  },
  {
    "type": "qa",
    "question": "6. Television ads for fast food always (make / are making) the food look delicious.\n(تجعل الإعلانات التلفزيونية للوجبات السريعة الطعام يبدو دائماً شهياً).",
    "answer": "make (حاضر بسيط) — لوجود ظرف التكرار always، ولأنها تعبر عن حقيقة ثابتة وملازمة للإعلانات."
  }
];

const fullDocument = {
  "$schema": "./schema.json",
  "meta": {
    "department": "جميع أقسام كلية التربية",
    "year": "السنة الأولى",
    "semester": "الفصل الأول",
    "subject": "إنكليزي (1)",
    "subjectType": "نظري",
    "lecture": "المحاضرة 1: عالم الإعلان",
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
console.log(`Successfully generated lecture 1 data.json with ${elements.length} elements!`);
