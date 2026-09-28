const fs = require('fs');
const path = require('path');

const elements = [
  // ---------------------------------------------------------------------------
  // عنوان المحاضرة الرئيسي
  // ---------------------------------------------------------------------------
  {
    "type": "h1",
    "text": "المحاضرة الثانية: الذهاب إلى أقصى الحدود — الرياضة والهوس (Unit 2: Going to Extremes — Sports and Obsession)",
    "badge": "الوحدة 2"
  },

  // ===========================================================================
  // القسم الأول: التحضير للقراءة ومفهوم الهوس الرياضي (PREPARING TO READ)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "1.",
    "text": "التحضير للقراءة: مفهوم الهوس الرياضي (Preparing to Read: Sports & Obsession)"
  },
  {
    "type": "bilingual",
    "badge": "Concept of Obsession — مفهوم الهوس",
    "english": "An obsession is a very strong desire to do or be something. For example, many famous athletes have obsessions. They might practice for very long hours, which could have a positive result when they win an Olympic gold medal. Their obsessions could also mean that they do something dangerous.",
    "arabic": "الهوس (Obsession) هو رغبة جارفة وشديدة جداً في فعل شيء ما أو الوصول إلى مكانة ما. على سبيل المثال، يمتلك العديد من مشاهير الرياضيين هوساً خاصاً؛ فهم يتدربون لساعات طوال ومضنية، وهو ما قد يثمر نتائج إيجابية رائعة كالفوز بميدالية ذهبية أولمبية، غير أن هذا الهوس قد يدفعهم أحياناً إلى الإقدام على تصرفات وأفعال بالغة الخطورة.",
    "notes": "obsession = هوس / رغبة قوية جداً | athletes = رياضيون | gold medal = ميدالية ذهبية."
  },
  {
    "type": "table",
    "title": "أشهر الرياضيين وهوسهم الرياضي الخاص (Athletes and their Obsessions)",
    "headers": ["الرياضي (Athlete)", "الرياضة", "طبيعة الهوس الخاص به (The Obsession)", "الترجمة والمعنى"],
    "rows": [
      ["1. Muhammad Ali", "ملاكمة (boxer)", "wanting to be 'The Greatest'", "الرغبة الجامحة في أن يكون 'الأعظم' في تاريخ الملاكمة."],
      ["2. Nadia Comaneci", "جمباز (gymnast)", "winning as many medals as possible", "الفوز بأكبر عدد ممكن من الميداليات في رياضة الجمباز."],
      ["3. Evel Knievel", "دراجات نارية (motorcyclist)", "jumping across the Grand Canyon", "المغامرة بالقفز عبر أخدود 'غراند كانيون' العظيم."],
      ["4. Arnold Schwarzenegger", "كمال أجسام (bodybuilder)", "having the most well-developed body in the world", "امتلاك وبناء أكمل جسم عضلي متطور في العالم."]
    ]
  },

  // ===========================================================================
  // القسم الثاني: مفردات الاستيعاب والتعاريف (VOCABULARY FOR COMPREHENSION)
  // ===========================================================================
  {
    "type": "h2",
    "prefix": "2.",
    "text": "مفردات الاستيعاب وتعاريفها المعتمدة (Vocabulary for Comprehension)"
  },
  {
    "type": "callout",
    "variant": "tip",
    "title": "قاعدة امتحانية هامة",
    "content": "يأتي هذا التمرين في الامتحان على شكل ربط الكلمة أو العبارة بتعريفها الدقيق، أو اختيار التعريف الصحيح للكلمة في سياق الجملة."
  },
  {
    "type": "qa",
    "question": "1. This was my sister's first time skiing, so it was hard for her to make it down the mountain.\n(كانت أول مرة تتزلج فيها أختي، لذا كان صعباً عليها أن تنجح بالوصول إلى أسفل الجبل).",
    "options": [
      "a. create something (تبتدع شيئاً ما)",
      "b. succeed in doing something (تنجح بفعل شيء ما وإنجازه)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "2. The girl's classmates thought that she was a freak because she was interested in nothing but snowboarding.\n(كانت زميلات الفتاة يعتقدن أنها غريبة الأطوار لأنها لم تكن مهتمة بشيء سوى التزلج باللوح).",
    "options": [
      "a. person who is in danger (الشخص الواقع في خطر)",
      "b. person who is strange or unusual (الشخص الغريب أو غير العادي)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "3. Playing golf on weekends is a relaxing escape for the busy doctor.\n(لعب الغولف في عطل نهاية الأسبوع ملاذ مريح للطبيب المشغول).",
    "options": [
      "a. a way to forget about problems (طريقة لنسيان المشاكل والمتاعب)",
      "b. an exciting adventure (مغامرة مثيرة)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "4. The bodybuilder stopped training because of intense pain in his shoulders.\n(توقف لاعب كمال الأجسام عن التمرين بسبب ألم شديد في كتفه).",
    "options": [
      "a. very strong (قوي وشديد جداً)",
      "b. minor (صغير أو ثانوي)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "5. If you get hooked on tennis, you will want to play it every day.\n(إذا أصبحت متعلقاً بكرة المضرب، فسترغب بلعبها كل يوم).",
    "options": [
      "a. get hurt while playing (تتأذى أثناء اللعب)",
      "b. become unable to stop doing something (تصبح عاجزاً عن التوقف عن فعله لشغفك به)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "6. He was a decent gymnast, but he was not good enough to go to the Olympics.\n(كان لاعب جمباز لائقاً، لكنه لم يكن جيداً كفاية للذهاب إلى الألعاب الأولمبية).",
    "options": [
      "a. excellent (ممتاز وخارق)",
      "b. average / acceptable (متوسط ومقبول المستوى)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "7. Everyone clapped and cheered because of the awesome motorcycle trick.\n(كل شخص صفق وهلل بسبب حركة راكب الدراجة النارية الرائعة).",
    "options": [
      "a. amazing (المذهلة والرائعة)",
      "b. simple (البسيطة والعادية)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "8. There is a controversy about skateboarding in public places because of its danger.\n(ثمة جدل وخلاف حول التزلج باللوح في الأماكن العامة بسبب خطورته).",
    "options": [
      "a. public law (قانون عام)",
      "b. strong disagreement (خلاف وجدل قوي)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "9. One of the benefits of running is that it makes your heart stronger.\n(إحدى فوائد الجري أنه يجعل قلبك أقوى).",
    "options": [
      "a. rewards / positive results (مكافآت ونتائج إيجابية)",
      "b. goals (أهداف)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "10. The team practices hard to accomplish the goal of winning a championship.\n(تمرن الفريق بجهد ليحقق هدف الفوز بالبطولة).",
    "options": [
      "a. make an effort (يبذل جهداً)",
      "b. succeed in doing something (ينجح في فعل شيء ما وإنجازه)"
    ],
    "correctOptionIndex": 1
  },

  // ===========================================================================
  // القسم الثالث: النص القرائي الأول: مقابلة طوني هوك (READING 1: INTERVIEW WITH TONY HAWK)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مقطع القراءة الأول: مقابلة مع أسطورة التزلج طوني هوك (Reading 1: Interview with Tony Hawk)",
    "badge": "Reading 1 — WOF"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "حوار مجلة Wheels on Fire (WOF) مع البطل Tony Hawk (TH)",
    "content": "نص حواري ممتع ومهم جداً يستعرض مسيرة طوني هوك وكيف تحول هوسه باللوح إلى احتراف عالمي ونجاح باهر."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 1: ذروة المسيرة المهنية",
    "english": "WOF: Let's start with the high point of your career. Can you pick one out to share with us?\nTH: Oh yes, definitely. For me, the high point came when I was traveling to France and I had to fill out a tourist information card. You know, the thing you fill out when you're entering a new country? Well, I got to write down 'skateboarder' as my occupation. How cool!\nWOF: You mean that was better than what you accomplished at the 1999 Summer X Games?",
    "arabic": "المراسل (WOF): دعنا نبدأ بأبرز ذروة في مسيرتك المهنية؛ هل بإمكانك انتقاء لحظة واحدة لتشاركها معنا؟\nطوني هوك (TH): أوه نعم، بالتأكيد! بالنسبة لي، جاءت الذروة عندما كنت مسافراً إلى فرنسا وكان عليّ ملء بطاقة بيانات سياحية عند دخول البلاد. أتعلم تلك الاستمارة التي تملؤها عند دخول بلد جديد؟ حسناً، لقد تمكنت من كتابة 'متزلج باللوح' في خانة مهنتي! كم كان ذلك مذهلاً ورائعاً!\nالمراسل: أتقصد أن ذلك كان أفضل مما حققته في ألعاب الصيف المتطرفة (1999 Summer X Games)؟! ",
    "notes": "high point = قمة / ذروة | occupation = المهنة | tourist card = بطاقة سياحية."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 2: قفزة الـ 900 والهوس الحقيقي",
    "english": "TH: You mean landing the 900? That was awesome, too. But that was pure obsession—story of my life. Nothing new for me there.\nWOF: How was landing that trick an obsession for you?\nTH: Well, like everything else I do on a skateboard, I have to get it right. It took me 13 years of practice to perfect the 900, and on that day, I think it took me something like 12 times before I made it.\nWOF: Did you really work on that trick for 13 years? That does seem like an obsession!",
    "arabic": "طوني هوك: أتعني نجاحي في تنفيذ قفزة الـ 900 درجة؟ لقد كانت رائعة حقاً، لكن ذلك كان مجرد هوس خالص—إنها قصة حياتي المعتادة، ولا شيء جديد بالنسبة لي هناك!\nالمراسل: وكيف كان إتقان تلك الحركة يمثل هوساً لديك؟\nطوني هوك: حسناً، كأي حركة أقوم بها على لوح التزلج، يجب أن أتقنها تماماً. استغرق مني الأمر 13 عاماً من التدريب الشاق لإتقان قفزة الـ 900، وفي ذلك اليوم بالذات، حاولت نحو 12 مرة قبل أن أنجح في تنفيذها ببراعة!\nالمراسل: هل عملت حقاً على حركة واحدة لمدة 13 عاماً؟! هذا يبدو هوساً حقيقياً بالفعل!",
    "notes": "landing the 900 = إتقان قفزة الـ 900 دورة | pure obsession = هوس خالص | perfect = يُتقن."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 3: الهروب من آلام مرحلة المراهقة",
    "english": "TH: Yeah, but, you know, it's a good obsession—if you can say that obsession is good. It's like this: I was this weird, skinny kid at school. Once I got into skateboarding and started wearing baggy skater clothes, it got worse. I was a freak. All the jocks picked on me. And I didn't have a chance with the girls—forget it. But skating—that was my escape. Every day after school I escaped to the skate park, and the focus on skating, this really intense focus that took all my concentration—I guess that was one way I could block out all the pain of growing up.",
    "arabic": "طوني هوك: أجل، لكنه هوس إيجابي—إن جاز وصف الهوس بالإيجابي. لقد كان وضعي كالتالي: كنت ولداً نحيلاً وغريب الأطوار في المدرسة، وحين تعلقت بالتزلج وصرت أرتدي ملابس المتزلجين الفضفاضة، زاد الطين بلة؛ فأصبحت في نظرهم شاذاً وغريباً، وكان جميع الرياضيين في المدرسة يتنمرون علي، ولم تكن لي أي فرصة مع الفتيات إطلاقاً! لكن التزلج كان ملاذي ومهربي الوحيد؛ ففي كل يوم بعد انتهاء الدوام كنت أهرب إلى حديقة التزلج، وكان التركيز الشديد والمكثف الذي يستحوذ على كامل انتباهي وسيلةً تمكنت من خلالها من حجب كافة آلام ومعاناة مرحلة النمو والنضج.",
    "notes": "baggy clothes = ملابس فضفاضة | freak = غريب الأطوار | jocks picked on me = الرياضيون تنمروا علي | escape = ملاذ وهروب | block out the pain = حجب الألم."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 4: دعم الوالدين والتزلج داخل المنزل",
    "english": "WOF: Did your parents support your obsession with skating?\nTH: Yeah, they were great. Mom took me and some friends down to the Oasis Skate Park when we were about 10 years old. They had this flat beginners' area where you could practice before you were ready to skate in the empty swimming pools. I was so skinny that the skate equipment didn't even fit me right. But once I got hooked, nothing else mattered. I drew pictures of skating all day, and I even skated in the house.\nWOF: Your parents let you skate in the house?\nTH: Yeah. They were pretty cool. Mom and Dad were older when they had me, so I guess you can say they were relaxed enough to let me do what I needed to do.",
    "arabic": "المراسل: وهل ساند والداك هذا الهوس بالتزلج؟\nطوني هوك: نعم، كانا رائعين لأبعد حد؛ فقد أخذتني أمي مع بعض الأصدقاء إلى حديقة 'أوسيس' للتزلج حين كان عمري نحو 10 سنوات، وكان بها مضمار مستوٍ للمبتدئين للتمرن قبل الانتقال للتزلج في أحواض السباحة الفارغة. كنت نحيلاً لدرجة أن معدات التزلج لم تكن تثبت على مقاسي، لكن بمجرد أن تعلقت به (got hooked)، لم يعد يهمني أي شيء آخر في الحياة؛ فكنت أرسم لوحات للتزلج طوال اليوم، بل وكنت أتزلج داخل أرجاء المنزل نفسه!\nالمراسل: هل سمح لك والداك بالتزلج داخل البيت؟!\nطوني هوك: أجل، كانا متفهمين وهادئين جداً؛ فقد أنجباني في سن متقدمة، لذا كانا متسامحين بما يكفي ليتركاني أفعل ما أحب وأحتاج.",
    "notes": "got hooked = أُغرمت به وتعلقت | skate in the house = يتزلج داخل المنزل | empty swimming pools = أحواض سباحة فارغة."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 5: الدراسة وتصميم حصة الرياضة",
    "english": "WOF: How about your school work? Were you able to get by in school?\nTH: Yeah, that was fine. I don't mean to brag or anything, but I was a gifted student. So, I was able to get my schoolwork done with decent grades. My only problem was being able to sit still in class. I had so much physical energy. But school was basically OK for me until some of the teachers started taking my skateboard away. They started lecturing me about the dangers of the sport.\nWOF: That couldn't stop you from skating!\nTH: No way. The cool thing was that my parents worked it out for me to go to a different high school. The principal there was awesome. He let us design our own PE [physical education] classes, so take a wild guess. What class did I create?\nWOF: Skateboarding.\nTH: You got it! That was my PE class.",
    "arabic": "المراسل: وماذا عن مستواك الدراسي؟ هل كنت قادراً على تدبر أمورك الدراسية؟\nطوني هوك: نعم، كان كل شيء على ما يرام؛ ولا أقصد التباهي والتفاخر، لكني كنت طالباً موهوباً، فكنت قادراً على إنجاز واجباتي ونيل درجات جيدة ومقبولة. كانت مشكلتي الوحيدة هي عجزي عن الجلوس ساكناً في المقعد لفرط طاقتي الجسدية. وكانت المدرسة جيدة عموماً حتى بدأ بعض الأساتذة بمصادرة لوح التزلج مني وإلقاء المحاضرات عليّ حول مخاطر هذه الرياضة!\nالمراسل: ولكن ذلك لم يستطع ثنيك عن التزلج!\nطوني هوك: مستحيل! والشيء الرائع أن والديّ دبّرا نقلي لمدرسة ثانوية أخرى، وكان مديرها شخصاً رائعاً بحق؛ حيث سمح لنا بتصميم حصص التربية البدنية الخاصة بنا، فخمن معي: أي حصة ابتكرت؟\nالمراسل: حصة التزلج باللوح!\nطوني هوك: أصبت بالضبط! تلك كانت حصتي الرياضية المعتمدة.",
    "notes": "brag = يتباهى | gifted = موهوب | decent grades = درجات جيدة | PE class = حصة التربية الرياضية."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 6: الاحتراف وأسلوب الروبوت ومايكل جوردان التزلج",
    "english": "TH: By that time, I was turning professional and starting to win prize money at competitions. During summer vacation, I was able to travel around cool places like Australia, Europe, and Canada. I was able to show off some techniques.\nWOF: Is that when your new style became famous?\nTH: Yeah. You know, a lot of other skaters had this smooth, flowing style. Compared to them, I was kind of like a robot. And I was always coming up with new tricks, new surprises.\nWOF: When did they first call you the Michael Jordan of skateboarding?\nTH: I guess that was back in '95 at the Extreme Games. That was a combination of skateboarding, BMX cycling, and rollerblading. I was just the one who got the attention. That's how TV is—I guess they can only focus on one thing at a time. But there were a lot of outstanding people there, believe me.",
    "arabic": "طوني هوك: بحلول ذلك الوقت، كنت قد تحولت إلى محترف وصرت أحصد الجوائز المالية في المسابقات الكبرى. وخلال العطل الصيفية، أتيحت لي فرصة السفر حول العالم إلى أماكن رائعة مثل أستراليا وأوروبا وكندا لأستعرض تقنياتي.\nالمراسل: وهل كانت تلك الفترة بداية شهرة أسلوبك الجديد؟\nطوني هوك: نعم؛ فبينما كان معظم المتزلجين يمتلكون أسلوباً انسيابياً وسلساً، كنت مقارنة بهم أشبه بالروبوت الآلي في حركاتي الدقيقة، وكنت دوماً أبتكر حركات ومفاجآت جديدة.\nالمراسل: ومتى أطلقوا عليك للمرة الأولى لقب 'مايكل جوردان التزلج'؟\nطوني هوك: أظن أن ذلك كان عام 1995 في ألعاب الإكستريم؛ حيث شملت البطولة مزيجاً من التزلج باللوح، وسباقات دراجات BMX، والتزلج بالعجلات. وكنت أنا من حظي باهتمام التلفزيون والإعلام، فالإعلام يركز عادة على نجم واحد، رغم وجود العديد من الرياضيين الفطاحل هناك صدقني.",
    "notes": "turning professional = التحول للاحتراف | like a robot = دقيق كالروبوت | BMX = دراجات الاستعراض."
  },
  {
    "type": "bilingual",
    "badge": "WOF & TH — الجزء 7: الجدل وفخره بفيلم طرزان",
    "english": "WOF: Let's go back to the high point. Was it still being able to write 'skateboarder' as your occupation?\nTH: Yeah. I love that. You know, there's so much controversy about skateboarding—some people think it is a crime and they don't want us to skate in public places, but I just love being able to say it's my occupation. My occupation and my obsession!\nWOF: As an occupation, it has rewarded you pretty well, wouldn't you say?\nTH: Yeah, there were some great benefits along the way—like being able to buy my own home when I was still in high school. And later, being able to buy another home out in the desert—and build my own skate park. But now that I think about it, you know what I'm really proud of accomplishing?\nWOF: Making skateboard history when you landed the 900?\nTH: Nope. It was having Disney animators use some of my tricks in the Tarzan movie. When my son watched Tarzan swinging through the trees, he realized that it had something to do with me. And he thought I was awesome! Now that's the greatest feeling you can get, believe me.",
    "arabic": "المراسل: لنعد إلى الذروة، هل ما زلت ترى قمة إنجازك في قدرتك على كتابة 'متزلج' كمهنة رسمية؟\nطوني هوك: نعم، أعشق ذلك! فأنت تعلم كم يثار من جدل (controversy) حول التزلج؛ إذ يعتبره البعض جريمة ويرفضون وجودنا في الأماكن العامة، لكني فخور ومغتبط بقدرتي على إعلانها مهنتي الرسمية.. مهنتي وهوسي معاً!\nالمراسل: وكمهنة، فقد كافأتك مادياً بسخاء كبير، أليس كذلك؟\nطوني هوك: بالتأكيد؛ فقد حصدت فوائد عظيمة، كشراء منزلي الخاص وأنا ما زلت تلميذاً بالثانوية، ثم شراء منزل آخر بالصحراء وبناء حديقة تزلج خاصة بي. لكن إن أردت معرفة ما أفتخر به حقاً اليوم:\nالمراسل: دخول تاريخ اللعبة بقفزة الـ 900؟\nطوني هوك: كلا! بل كان استخدام رسامي ديزني لبعض حركاتي في فيلم 'طرزان' الشهير؛ فعندما رأى ابني طرزان وهو يتأرجح بين الأشجار، أدرك أن الأمر مقتبس من حركات أبيه وقال لي بفخر: 'أنت رائع يا أبي!'. وهذا بحد ذاته أعظم وأجمل شعور في الوجود صدقني!",
    "notes": "controversy = جدل وخلاف | Tarzan movie = فيلم طرزان الكرتوني | greatest feeling = أعظم شعور."
  },

  // ===========================================================================
  // القسم الرابع: النص القرائي الثاني: اضطرابات الغذاء (READING 2: EATING DISORDER)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مقطع القراءة الثاني: إدخال نجمة ثانوية للمستشفى بسبب اضطراب غذائي (Reading 2: High School Star Hospitalized)",
    "badge": "Reading 2"
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 1: Anorexia Nervosa Crisis",
    "english": "Sierra High School gymnast Ashley Lindermann was hospitalized Tuesday for complications related to anorexia nervosa. Her coach, Dianne Coyle, says that she will not be returning to the gymnastics team this season. 'It's really a loss—not only to the team but also to Ashley personally,' says Coyle. 'She had hopes of qualifying for the Olympics. But her health comes first, of course. Once she is better, I'm sure she can get back into the sport and go for the gold.'",
    "arabic": "نُقلت نجمة الجمباز بمدرسة سييرا الثانوية، 'آشلي ليندرمان'، إلى المستشفى يوم الثلاثاء إثر مضاعفات صحية خطيرة مرتبطة بمرض القهم العصبي (فقدان الشهية العصابي anorexia nervosa). وأعلنت مدربتها، 'ديان كويل'، أنها لن تعود لصفوف فريق الجمباز هذا الموسم. وصرحت المدربة قائلة: 'إنها لخسارة فادحة حقاً، ليس للفريق فحسب بل لآشلي شخصياً؛ فقد كانت تعلق آمالاً عريضة في التأهل للألعاب الأولمبية. لكن صحتها تأتي في المقام الأول دون شك، ومتى ما تعافت، فأنا على يقين من قدرتها على العودة للرياضة والمنافسة بقوة على الميدالية الذهبية'.",
    "notes": "anorexia nervosa = القهم العصبي (فقدان الشهية العصابي) | hospitalized = أُدخلت المستشفى | qualify for Olympics = التأهل للأولمبياد."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 2: Weight Obsession & Mental Control",
    "english": "Dr. Paula Kim, director of the Eating Disorders Clinic at Baldwin Hospital, explains that it is not unusual for athletes, especially gymnasts, to become obsessed with their weight. One reason for this is that in gymnastics, the lighter the body, the more skillfully it can perform. She explains that an obsession with weight can lead to extreme dieting, which affects not only the body but also the mind. 'For the anorexic, the mental focus becomes very small: food and weight.' In a way, it's easy to see how this helps the anorexic manage the fear of living in the big uncontrollable world out there. You may not be able to control how other people feel about you, but you can control what you put in your mouth. You can also control how many hours you spend at the gym. Soon you get hooked on controlling your weight.",
    "arabic": "توضح الدكتورة 'بولا كيم'، مديرة عيادة اضطرابات الأكل بمستشفى بولدوين، أنه ليس بالأمر المستغرب أن يصاب الرياضيون، وبخاصة لاعبو الجمباز، بهوس الوزن؛ وأحد أبرز أسباب ذلك أنه في الجمباز، كلما كان الجسد أخف وزناً، زادت براعته وخفته في الأداء. غير أن هذا الهوس بالوزن يجر إلى حميات قاسية ومفرطة تؤذي العقل والجسد معاً: 'فبالنسبة للمصاب بالقهم، يضيق التركيز الذهني وينحصر في دائرة ضيقة: الطعام والوزن فقط'. وبطريقة ما، يسهل فهم كيف يمنح هذا الهوس المريض شعوراً بالتحكم في مخاوف العيش في عالم خارجي واسع لا يمكن السيطرة عليه؛ فقد تعجز عن التحكم بمشاعر الناس تجاهك، لكنك قادر تماماً على التحكم بما يدخل فمك، وبعدد الساعات التي تقضيها في قاعة التدريب، وسرعان ما تدمن هوس التحكم بوزنك.",
    "notes": "extreme dieting = حمية مفرطة وقاسية | uncontrollable world = عالم خارج عن السيطرة | mental focus = التركيز الذهني."
  },
  {
    "type": "bilingual",
    "badge": "Reading 2 — Paragraph 3: Family Pressure & Hospitalization",
    "english": "High school counselor Lisa Rodriguez has expressed concern that Lindermann's illness is related to pressure. 'There's an enormous amount of pressure that goes along with training for the Olympics,' she says. 'I know that she comes from an athletic family—I think that's why she felt she had to accomplish so much in sports. Also, when you talk about the Olympics, you're talking about being the best of the best. I think that added to Ashley's feeling of pressure.' Coach Coyle says, 'As soon as I met Ashley, I could tell right away that she was obsessed with the sport. And that's not the kind of athlete that you have to push. My goal with Ashley was to try and help her have more of a balanced life.' Lindermann, who currently weighs only 72 pounds (32.6 kg), is expected to remain in the hospital for at least a few months.",
    "arabic": "أعربت المرشدة التربوية بالمدرسة، 'ليزا رودريغز'، عن قلقها البالغ من ارتباط مرض ليندرمان بالضغوط المحيطة بها: 'فهناك ضغط نفسي هائل يرافق التدريب للأولمبياد. وأعلم أنها تنحدر من عائلة رياضية عريقة، وأظن أن ذلك عزز شعورها بضرورة إحراز إنجازات استثنائية. كما أن الحديث عن الأولمبياد يعني السعي لتكون الأفضل بين النخبة، وهو ما ضاعف الضغط على آشلي'. وتقول المدربة كويل: 'منذ لحظة لقائي بآشلي، علمت فوراً أنها مهووسة بالرياضة، وذلك صنف من الرياضيين لا يحتاج من يدفعهم، بل كان هدفي مساعدتها على عيش حياة متوازنة وأخذ قسط من الراحة'. وتزن آشلي حالياً 72 رطلاً فقط (32.6 كغ)، ومن المتوقع أن تمكث في المستشفى عدة أشهر على الأقل.",
    "notes": "enormous pressure = ضغط هائل | athletic family = عائلة رياضية | balanced life = حياة متوازنة | weighs 72 pounds = تزن 72 رطلاً فقط."
  },
  {
    "type": "h2",
    "prefix": "3.",
    "text": "تمارين استيعاب النص الثاني (Comprehension Questions)"
  },
  {
    "type": "qa",
    "question": "1. Ashley's coach hopes that she will leave the hospital and .........\n(تأمل مدربة آشلي أن تغادر المستشفى و.........)",
    "options": [
      "a. focus on her health (تركز على صحتها)",
      "b. join the Olympic team (تنضم للفريق الأولمبي وتمضي نحو الميدالية الذهبية)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "2. Anorexia nervosa is an obsession with .........\n(مرض القهم العصبي هو هوس بـ.........)",
    "options": [
      "a. exercise (التمارين الرياضية)",
      "b. weight (الوزن وشكل الجسد)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "3. One reason for becoming anorexic is that it gives you a feeling of .........\n(أحد أسباب الإصابة بالقهم العصبي أنه يمنح المصاب شعوراً بـ.........)",
    "options": [
      "a. more control (المزيد من التحكم والسيطرة في حياته)",
      "b. mental focus (التركيز الذهني)"
    ],
    "correctOptionIndex": 0
  },
  {
    "type": "qa",
    "question": "4. Some of the pressure in Ashley's life was because she wanted to be the best gymnast in her .........\n(كان بعض الضغط في حياة آشلي بسبب رغبتها في أن تكون أفضل لاعبة جمباز في .........)",
    "options": [
      "a. high school (مدرستها الثانوية)",
      "b. country (وطنها وبلادها بأكملها)"
    ],
    "correctOptionIndex": 1
  },
  {
    "type": "qa",
    "question": "5. Before she went to the hospital, her coach had been pushing her to focus on gymnastics .........\n(قبل دخولها المستشفى، كانت مدربتها تحثها على التركيز على الجمباز .........)",
    "options": [
      "a. less (بشكل أقل لنيل الراحة وعيش حياة متوازنة)",
      "b. more (بشكل أكبر)"
    ],
    "correctOptionIndex": 0
  },

  // ===========================================================================
  // القسم الخامس: اشتقاقات الكلمات وتطبيق المفردات (WORD FORMS & PRACTICE)
  // ===========================================================================
  {
    "type": "h1",
    "text": "اشتقاقات الكلمات والمفردات في السياق (Word Forms & Vocabulary in Context)",
    "badge": "Vocabulary Workshop"
  },
  {
    "type": "table",
    "title": "جدول اشتقاقات الكلمات المقررة (الاسم، الفعل، الصفة، الظرف)",
    "headers": ["الاسم (Noun)", "الفعل (Verb)", "الصفة (Adjective)", "الظرف (Adverb)", "المعنى بالعربية"],
    "rows": [
      ["accomplishment", "accomplish", "accomplished", "—", "إنجاز / يُنجز / مُنجَز وبارع"],
      ["escape", "escape", "escaping", "—", "ملاذ ومهرب / يهرب / هارب"],
      ["controversy", "—", "controversial", "controversially", "جدل وخلاف / جدلي ومثير للجدل / بشكل جدلي"],
      ["benefit", "benefit", "beneficial", "beneficially", "فائدة / يستفيد / مفيد ونافع / بشكل مفيد"],
      ["obsession", "obsess", "obsessive", "obsessively", "هوس / يهوس / هوسي / بهوس وجنون"],
      ["intensity", "intensify", "intense", "intensely", "شدة وكثافة / يشدد ويكثف / شديد / بشدة"],
      ["perfection", "perfect", "perfect", "perfectly", "إتقان وكمال / يُتقن / متقن وكامل / بإتقان تام"],
      ["practice", "practice", "practiced", "—", "تمرين وممارسة / يتمرن / متمرس ومجرّب"]
    ]
  },
  {
    "type": "h2",
    "prefix": "4.",
    "text": "تطبيق المفردات في سياق نصي: قصة راقصة الباليه جلسي كيركلاند (Gelsey Kirkland)"
  },
  {
    "type": "callout",
    "variant": "warning",
    "title": "فراغات نص Dancing on My Grave في الامتحان",
    "content": "نص وزاري هام جداً؛ حيث يطلب في الامتحان ملء الفراغات بكلمات المفردات واشتقاقاتها المناسبة."
  },
  {
    "type": "bilingual",
    "badge": "قصة جلسي كيركلاند — الفراغات المحلولة",
    "english": "Gelsey Kirkland was a professional ballerina with the New York City Ballet and the American Ballet Theatre. She became (1) obsessed with having a thin body. As a result of her (2) obsession, she ate a very small amount of food. For example, she sometimes ate only one apple a day while following a very (3) intense dance practice schedule. Her feelings toward Mikhail Baryshnikov, who was considered one of the most (4) awesome male dancers in the world, also became (5) obsessive. Sadly, her love for Baryshnikov caused her much personal pain, and to (6) escape from her unhappiness, she began using drugs and got (7) hooked on them. Finally, she wrote a book about her life and career entitled Dancing on My Grave. Perhaps readers of this book will (8) benefit from learning about the experience of this talented, yet unhappy, dancer.",
    "arabic": "كانت جلسي كيركلاند راقصة باليه محترفة في فرقة نيويورك باليه ومسرح الباليه الأمريكي، وقد أصبحت (1) مهووسة (obsessed) بامتلاك جسد نحيل. وكنتيجة لـ (2) هوسها (obsession) هذا، كانت تتناول كميات ضئيلة للغاية من الطعام؛ فكانت أحياناً تقتات على تفاحة واحدة طوال اليوم في ظل جدول تمارين باليه (3) مكثف (intense) جداً. كما تحولت مشاعرها تجاه ميخائيل باريشنيكوف، الذي كان يعتبر من (4) أروع (awesome) الراقصين في العالم، إلى مشاعر (5) هوسية (obsessive) أيضاً. وللأسف، سبب حبها له آلاماً شخصية قاسية، ولكي (6) تهرب (escape) من تعاستها، لجأت إلى تعاطي المهدئات وأصبحت (7) مدمنة ومتعلقة بها (hooked on). وفي النهاية، ألفت كتاباً شهيراً عن حياتها بعنوان 'الرقص على قبري'، ولعل قراء هذا الكتاب (8) يستفيدون (benefit) من العِبر والدروس المستفادة من تجربة هذه الراقصة الموهوبة والتعيسة.",
    "notes": "1. obsessed (صفة) | 2. obsession (اسم) | 3. intense (صفة) | 4. awesome (صفة) | 5. obsessive (صفة) | 6. escape (مصدر) | 7. hooked on (مركب) | 8. benefit (فعل)."
  },

  // ===========================================================================
  // القسم السادس: مهارات الكتابة (FOCUS ON WRITING: THE 5Ws)
  // ===========================================================================
  {
    "type": "h1",
    "text": "مهارات الكتابة: التقرير الواقعي والأسئلة الخمسة (Writing a Factual Report: The 5Ws)",
    "badge": "Writing Skills"
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "قاعدة كتابة التقارير والمقالات الصحفية الواقعية (The 5Ws)",
    "content": "تجيب المقالات الصحفية والتقارير الواقعية الناجحة دوماً عن الأسئلة الأساسية الخمسة المسماة بـ (5Ws):\n1. Who? (مَن؟ — عمن تدور القصة؟ الشخصية الرئيسية)\n2. What? (ماذا؟ — ما الذي حدث في القصة؟ الحدث)\n3. When? (متى؟ — متى وقع الحدث؟ التوقيت والزمان)\n4. Where? (أين؟ — أين وقعت الأحداث؟ المكان)\n5. Why / How? (لماذا أو كيف؟ — ما الأسباب وكيف جرى ذلك؟)"
  },
  {
    "type": "table",
    "title": "تطبيق الأسئلة الخمسة على مشروع الفيديو التعليمي للطالبة Kristy Pham",
    "headers": ["رقم الحقيقة (Fact)", "الجملة بالإنكليزية", "اسم الاستفهام المناسب من الـ 5Ws", "الترجمة والتوضيح"],
    "rows": [
      ["Fact #1", "Kristy Pham is the captain of the Sierra High gymnastics team.", "Who? (مَن)", "تحدد من هي صانعة الفيديو وصاحبة الصفة."],
      ["Fact #2", "The video was produced last week in the Sierra High TV production class.", "When? / Where? (متى وأين)", "تحدد توقيت الإنتاج (الأسبوع الماضي) والمكان (صف التلفزيون)."],
      ["Fact #3", "The video will be shown next weekend at the Sierra Bonita Public Library.", "Where? / When? (أين ومتى)", "تحدد مكان العرض (المكتبة العامة) والزمان (نهاية الأسبوع)."],
      ["Fact #4", "The purpose of the video is to educate the public about the dangers of anorexia nervosa.", "Why? (لماذا — الغاية)", "تحدد الهدف والغاية التوعوية من إنتاج هذا الفيديو."],
      ["Fact #5", "The video will include interviews with Ashley Lindermann's teammates and coach.", "What? (ماذا — المحتوى)", "تحدد محتوى الفيديو وما سيتضمنه من لقاءات ومقابلات."]
    ]
  },

  // ===========================================================================
  // القسم السابع: القواعد (GRAMMAR: MODALS OF ABILITY)
  // ===========================================================================
  {
    "type": "h1",
    "text": "القواعد: أفعال التعبير عن المقدرة والتمكن (Modals of Ability: Can, Could, Be able to)",
    "badge": "Grammar"
  },
  {
    "type": "table",
    "title": "قواعد وأزمنة استخدام Can و Could و Be able to",
    "headers": ["الزمن والصيغة", "الفعل الصرفي المناسب", "أمثلة نموذجية من المنهاج", "المعنى والوظيفة"],
    "rows": [
      ["الحاضر (Present)", "can / can't\nأو am/is/are able to", "• He can do skateboard tricks.\n• She is able to swim fast.\n• He's not able to ride a horse.", "التعبير عن المقدرة أو العجز في الوقت الحالي والحاضر."],
      ["الماضي (Past)", "could / couldn't\nأو was/were able to", "• When he was a boy, he could ride his bike all day.\n• Last winter, they were able to ski four times.\n• He wasn't able to join the Olympic team.", "التعبير عن المقدرة العامة في الماضي أو إنجاز حدث محدد في الماضي."],
      ["المستقبل (Future)", "will be able to / won't be able to", "• They will be able to win the race.\n• I hope you will be able to write back.", "المقدرة المستقبلية (ملاحظة: can لا تستخدم في صيغة المستقبل)."],
      ["المصدر والتام (Infinitive & Perfect)", "to be able to\nأو have/has been able to", "• She wants to be able to run faster. (verb + infinitive)\n• They have been able to win two championships. (present perfect)", "بعد أفعال الرغبة وحروف الجر والأزمنة التامة حيث لا يوجد صيغة لـ can."]
    ]
  },
  {
    "type": "h2",
    "prefix": "5.",
    "text": "رسالة مايكل كريغ إلى طوني هوك (Letter from Michael Craig to Tony Hawk)"
  },
  {
    "type": "callout",
    "variant": "tip",
    "title": "تطبيق قواعد المقدرة في نص الرسالة",
    "content": "تمرين امتحاني شامل يتضمن استخدام أفعال المقدرة في سياق رسالة من متزلج صغير إلى مثله الأعلى."
  },
  {
    "type": "bilingual",
    "badge": "رسالة مايكل كريغ — الأفعال المحلولة",
    "english": "Dear Mr. Hawk,\nMy name is Michael Craig, and I live in Florida. I am nine years old, and I guess you (1) can say that I'm obsessed with skateboarding. My dream is (2) to be able to ride a skateboard like you do. I (3) can't believe your tricks! Last week I started practicing the 900, but I (4) couldn't / wasn't able to make it. My mom came outside and started yelling at me. She thought I (5) could kill myself doing that trick, but I told her not to worry. I'm a pretty decent skateboarder for my age. How old were you when you (6) were able to / could finally land a 900? I want (7) to be able to do that by my tenth birthday. I'm going to practice a lot. Mr. Hawk, I know that you're a busy professional skateboarder, but I really hope that you (8) will be able to write me back soon. (9) Can you please find time for a skateboarding star of the future? Thanks for reading my letter. Keep up the intense skateboarding. You're the best!\nYours truly,\nMichael Craig",
    "arabic": "عزيزي السيد هوك،\nاسمي مايكل كريغ وأعيش في فلوريدا. عمري تسع سنوات وأظنك (1) تستطيع (can) القول إنني مهووس بالتزلج باللوح. حلمي هو (2) أن أكون قادراً على (to be able to) ركوب لوح التزلج مثلك تماماً؛ فأنا (3) لا أستطيع (can't) تصديق حركاتك الخارقة! في الأسبوع الماضي بدأت أتمرن على قفزة الـ 900، لكني (4) لم أستطع / لم أكن قادراً على (couldn't / wasn't able to) تحقيقها، فخرجت أمي وصاحت بي معتقدة أنني (5) يمكن أن (could) أقتل نفسي بهذه الحركة، لكني طمأنتها ألا تقلق؛ فأنا متزلج بارع بالنسبة لعمري. كم كان عمرك عندما (6) استطعت / كنت قادراً على (could / were able to) الهبوط بسلام في قفزة الـ 900؟ أريد (7) أن أكون قادراً على (to be able to) تنفيذها بحلول عيد ميلادي العاشر، وسأتمرن بكثافة. أعلم أنك متزلج محترف ومشغول للغاية، لكني آمل بشدة أن (8) تكون قادراً على (will be able to) الرد علي قريباً. هل (9) تستطيع رجاءً (Can you) إيجاد بعض الوقت لنجم تزلج مستقبلي؟ شكراً لقراءتك رسالتي، وواظب على التزلج الرائع، فأنت الأفضل دائماً!\nالمخلص لك:\nمايكل كريغ",
    "notes": "حلول الفراغات: 1. can | 2. to be able to | 3. can't | 4. couldn't / wasn't able to | 5. could | 6. were able to / could | 7. to be able to | 8. will be able to | 9. Can."
  }
];

const docLecture2 = {
  "$schema": "./schema.json",
  "meta": {
    "department": "جميع أقسام كلية التربية",
    "year": "السنة الأولى",
    "semester": "الفصل الأول",
    "subject": "إنكليزي (1)",
    "subjectType": "نظري",
    "lecture": "المحاضرة 2: الرياضة والهوس",
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

const outputPath = path.resolve(__dirname, 'data-lecture-2.json');
fs.writeFileSync(outputPath, JSON.stringify(docLecture2, null, 2), 'utf8');
console.log(`Successfully generated data-lecture-2.json with ${elements.length} elements!`);
