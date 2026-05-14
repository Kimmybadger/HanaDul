// ═══════════════════════════════════════════════════════════════
//  하나둘 (Hana Dul) — Word Database
//  data.js — 단어, 한자, 사자성어 데이터
// ═══════════════════════════════════════════════════════════════

const WORDS = {

  // ══════════════════════════════════════
  //  일상 · Daily Life
  // ══════════════════════════════════════
  "시간":{ korean:"시간", romanization:"si-gan", hanja:"時間", english:"Time", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"時",korean:"시",meaning:"time · hour"},{char:"間",korean:"간",meaning:"between · interval"}],
    examples:[{korean:"시간이 없어요.",english:"I don't have time."},{korean:"몇 시예요?",english:"What time is it?"},{korean:"시간이 빨리 가네요.",english:"Time goes by so fast."}],
    related:["시계","순간","기간","시작"] },

  "약속":{ korean:"약속", romanization:"yak-sok", hanja:"約束", english:"Promise / Appointment", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"約",korean:"약",meaning:"promise · approximately"},{char:"束",korean:"속",meaning:"bind · bundle"}],
    examples:[{korean:"약속이 있어요.",english:"I have an appointment."},{korean:"약속을 지켜요.",english:"Keep your promise."},{korean:"내일 약속이에요.",english:"We have plans tomorrow."}],
    related:["시간","친구","신뢰"] },

  "전화":{ korean:"전화", romanization:"jeon-hwa", hanja:"電話", english:"Phone call / Telephone", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"電",korean:"전",meaning:"electricity · lightning"},{char:"話",korean:"화",meaning:"talk · speech"}],
    examples:[{korean:"전화해요.",english:"Call me."},{korean:"전화가 왔어요.",english:"I got a call."},{korean:"전화번호가 뭐예요?",english:"What's your phone number?"}],
    related:["문자","연락","소통"] },

  "문자":{ korean:"문자", romanization:"mun-ja", hanja:"文字", english:"Text message / Character", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"文",korean:"문",meaning:"writing · culture"},{char:"字",korean:"자",meaning:"character · letter"}],
    examples:[{korean:"문자 보냈어요.",english:"I sent a text."},{korean:"문자 확인해요.",english:"Check the text message."},{korean:"한글은 문자예요.",english:"Hangul is a writing system."}],
    related:["전화","언어","소통"] },

  "운동":{ korean:"운동", romanization:"un-dong", hanja:"運動", english:"Exercise / Movement / Sports", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"運",korean:"운",meaning:"move · transport · luck"},{char:"動",korean:"동",meaning:"move · action"}],
    examples:[{korean:"운동해요.",english:"I exercise."},{korean:"운동을 좋아해요.",english:"I like sports."},{korean:"매일 운동해요.",english:"I exercise every day."}],
    related:["건강","체력","땀"] },

  "건강":{ korean:"건강", romanization:"geon-gang", hanja:"健康", english:"Health", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"健",korean:"건",meaning:"healthy · strong"},{char:"康",korean:"강",meaning:"peaceful · healthy"}],
    examples:[{korean:"건강이 최고예요.",english:"Health is the most important thing."},{korean:"건강을 챙기세요.",english:"Take care of your health."},{korean:"건강하게 살아요.",english:"Live healthily."}],
    related:["운동","음식","행복"] },

  "날씨":{ korean:"날씨", romanization:"nal-ssi", hanja:null, english:"Weather", category:"일상 · Daily Life",
    hanja_breakdown:[],
    examples:[{korean:"날씨가 좋아요.",english:"The weather is nice."},{korean:"날씨가 어때요?",english:"How's the weather?"},{korean:"날씨가 추워요.",english:"The weather is cold."}],
    related:["계절","비","바람","하늘"] },

  "시작":{ korean:"시작", romanization:"si-jak", hanja:"始作", english:"Beginning / Start", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"始",korean:"시",meaning:"begin · start"},{char:"作",korean:"작",meaning:"make · create"}],
    examples:[{korean:"시작이 반이에요.",english:"Starting is half the battle."},{korean:"언제 시작해요?",english:"When does it start?"},{korean:"새로운 시작이에요.",english:"It's a new beginning."}],
    related:["끝","처음","시간"] },

  "끝":{ korean:"끝", romanization:"kkeut", hanja:null, english:"End / Finish", category:"일상 · Daily Life",
    hanja_breakdown:[],
    examples:[{korean:"끝났어요.",english:"It's over/finished."},{korean:"끝까지 해요.",english:"Do it to the end."},{korean:"끝이 좋아야 해요.",english:"The ending needs to be good."}],
    related:["시작","순간","결과"] },

  "결과":{ korean:"결과", romanization:"gyeol-gwa", hanja:"結果", english:"Result / Outcome", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"結",korean:"결",meaning:"tie · conclude"},{char:"果",korean:"과",meaning:"fruit · result"}],
    examples:[{korean:"결과가 좋아요.",english:"The result is good."},{korean:"결과를 기다려요.",english:"I'm waiting for the result."},{korean:"노력한 결과예요.",english:"It's the result of hard work."}],
    related:["시작","끝","성공"] },

  "성공":{ korean:"성공", romanization:"seong-gong", hanja:"成功", english:"Success", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"成",korean:"성",meaning:"achieve · become"},{char:"功",korean:"공",meaning:"achievement · merit"}],
    examples:[{korean:"성공했어요!",english:"I succeeded!"},{korean:"성공을 축하해요.",english:"Congratulations on your success."},{korean:"성공의 비결이에요.",english:"It's the secret to success."}],
    related:["결과","노력","행복","실패"] },

  "실패":{ korean:"실패", romanization:"sil-pae", hanja:"失敗", english:"Failure", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"失",korean:"실",meaning:"lose · fail"},{char:"敗",korean:"패",meaning:"defeat · fail"}],
    examples:[{korean:"실패해도 괜찮아요.",english:"It's okay to fail."},{korean:"실패는 성공의 어머니예요.",english:"Failure is the mother of success."},{korean:"실패에서 배워요.",english:"Learn from failure."}],
    related:["성공","결과","노력"] },

  "노력":{ korean:"노력", romanization:"no-ryeok", hanja:"努力", english:"Effort / Hard work", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"努",korean:"노",meaning:"strive · exert"},{char:"力",korean:"력",meaning:"power · strength"}],
    examples:[{korean:"노력하면 돼요.",english:"If you try hard, you can do it."},{korean:"노력이 필요해요.",english:"It requires effort."},{korean:"열심히 노력했어요.",english:"I worked really hard."}],
    related:["성공","결과","의지"] },

  // ══════════════════════════════════════
  //  음식 · Food
  // ══════════════════════════════════════
  "식사":{ korean:"식사", romanization:"sik-sa", hanja:"食事", english:"Meal / Dining", category:"음식 · Food",
    hanja_breakdown:[{char:"食",korean:"식",meaning:"eat · food"},{char:"事",korean:"사",meaning:"matter · affair"}],
    examples:[{korean:"식사했어요?",english:"Have you eaten?"},{korean:"같이 식사해요.",english:"Let's eat together."},{korean:"식사가 맛있어요.",english:"The meal is delicious."}],
    related:["식당","음식","조식","점심","저녁"] },

  "식당":{ korean:"식당", romanization:"sik-dang", hanja:"食堂", english:"Restaurant / Cafeteria", category:"음식 · Food",
    hanja_breakdown:[{char:"食",korean:"식",meaning:"eat · food"},{char:"堂",korean:"당",meaning:"hall · building"}],
    examples:[{korean:"식당에 가요.",english:"Let's go to the restaurant."},{korean:"식당이 어디예요?",english:"Where is the restaurant?"},{korean:"학교 식당이에요.",english:"It's the school cafeteria."}],
    related:["식사","음식","급식"] },

  "식품":{ korean:"식품", romanization:"sik-pum", hanja:"食品", english:"Food product / Groceries", category:"음식 · Food",
    hanja_breakdown:[{char:"食",korean:"식",meaning:"eat · food"},{char:"品",korean:"품",meaning:"product · quality"}],
    examples:[{korean:"식품을 사러 가요.",english:"I'm going to buy groceries."},{korean:"식품 알레르기가 있어요.",english:"I have a food allergy."},{korean:"유기농 식품이에요.",english:"It's organic food."}],
    related:["식사","음식","식당"] },

  "음식":{ korean:"음식", romanization:"eum-sik", hanja:"飮食", english:"Food / Cuisine", category:"음식 · Food",
    hanja_breakdown:[{char:"飮",korean:"음",meaning:"drink · consume"},{char:"食",korean:"식",meaning:"eat · food"}],
    examples:[{korean:"음식이 맛있어요.",english:"The food is delicious."},{korean:"한국 음식을 좋아해요.",english:"I like Korean food."},{korean:"음식을 남기면 안 돼요.",english:"You shouldn't waste food."}],
    related:["식사","식당","식품","조식"] },

  "급식":{ korean:"급식", romanization:"geup-sik", hanja:"給食", english:"School meal / Cafeteria food", category:"음식 · Food",
    hanja_breakdown:[{char:"給",korean:"급",meaning:"supply · provide"},{char:"食",korean:"식",meaning:"eat · food"}],
    examples:[{korean:"급식이 맛있어요.",english:"The school lunch is delicious."},{korean:"오늘 급식 메뉴가 뭐예요?",english:"What's today's lunch menu?"},{korean:"급식 시간이에요.",english:"It's lunch time."}],
    related:["식사","식당","시간"] },

  "조식":{ korean:"조식", romanization:"jo-sik", hanja:"朝食", english:"Breakfast", category:"음식 · Food",
    hanja_breakdown:[{char:"朝",korean:"조",meaning:"morning · dawn"},{char:"食",korean:"식",meaning:"eat · food"}],
    examples:[{korean:"조식이 포함돼요.",english:"Breakfast is included."},{korean:"조식을 먹었어요?",english:"Did you have breakfast?"},{korean:"조식 뷔페예요.",english:"It's a breakfast buffet."}],
    related:["점심","저녁","식사","음식"] },

  "점심":{ korean:"점심", romanization:"jeom-sim", hanja:"點心", english:"Lunch", category:"음식 · Food",
    hanja_breakdown:[{char:"點",korean:"점",meaning:"dot · point"},{char:"心",korean:"심",meaning:"heart · mind"}],
    examples:[{korean:"점심 먹었어요?",english:"Did you have lunch?"},{korean:"점심 같이 먹어요.",english:"Let's have lunch together."},{korean:"점심시간이에요.",english:"It's lunchtime."}],
    related:["조식","저녁","식사"] },

  "저녁":{ korean:"저녁", romanization:"jeo-nyeok", hanja:null, english:"Evening / Dinner", category:"음식 · Food",
    hanja_breakdown:[],
    examples:[{korean:"저녁 먹었어요?",english:"Did you have dinner?"},{korean:"저녁에 만나요.",english:"Let's meet in the evening."},{korean:"저녁노을이 예뻐요.",english:"The evening glow is beautiful."}],
    related:["조식","점심","밤","시간"] },

  "맛":{ korean:"맛", romanization:"mat", hanja:null, english:"Taste / Flavor", category:"음식 · Food",
    hanja_breakdown:[],
    examples:[{korean:"맛있어요!",english:"It's delicious!"},{korean:"맛이 어때요?",english:"How does it taste?"},{korean:"단맛이 나요.",english:"It tastes sweet."}],
    related:["음식","식사","향기"] },

  "요리":{ korean:"요리", romanization:"yo-ri", hanja:"料理", english:"Cooking / Cuisine", category:"음식 · Food",
    hanja_breakdown:[{char:"料",korean:"료",meaning:"material · measure"},{char:"理",korean:"리",meaning:"reason · manage · cook"}],
    examples:[{korean:"요리를 잘해요.",english:"I'm good at cooking."},{korean:"한국 요리예요.",english:"It's Korean cuisine."},{korean:"요리하는 게 좋아요.",english:"I enjoy cooking."}],
    related:["음식","식사","맛"] },

  "재료":{ korean:"재료", romanization:"jae-ryo", hanja:"材料", english:"Ingredient / Material", category:"음식 · Food",
    hanja_breakdown:[{char:"材",korean:"재",meaning:"material · timber"},{char:"料",korean:"료",meaning:"material · measure"}],
    examples:[{korean:"재료가 신선해요.",english:"The ingredients are fresh."},{korean:"재료를 준비해요.",english:"Prepare the ingredients."},{korean:"비밀 재료예요.",english:"It's a secret ingredient."}],
    related:["요리","음식","식품"] },

  // ══════════════════════════════════════
  //  감정 · Emotions
  // ══════════════════════════════════════
  "감정":{ korean:"감정", romanization:"gam-jeong", hanja:"感情", english:"Emotion / Feeling", category:"감정 · Emotion",
    hanja_breakdown:[{char:"感",korean:"감",meaning:"feel · sense"},{char:"情",korean:"정",meaning:"feeling · affection"}],
    examples:[{korean:"감정을 표현해요.",english:"Express your emotions."},{korean:"복잡한 감정이에요.",english:"It's a complex feeling."},{korean:"감정이 풍부해요.",english:"She's very emotional."}],
    related:["기억","사랑","행복","기분"] },

  "기분":{ korean:"기분", romanization:"gi-bun", hanja:"氣分", english:"Mood / Feeling", category:"감정 · Emotion",
    hanja_breakdown:[{char:"氣",korean:"기",meaning:"energy · spirit · air"},{char:"分",korean:"분",meaning:"divide · part · minute"}],
    examples:[{korean:"기분이 좋아요.",english:"I'm in a good mood."},{korean:"기분이 어때요?",english:"How are you feeling?"},{korean:"기분 전환해요.",english:"Let's change the mood."}],
    related:["감정","행복","슬픔"] },

  "행복":{ korean:"행복", romanization:"haeng-bok", hanja:"幸福", english:"Happiness", category:"감정 · Emotion",
    hanja_breakdown:[{char:"幸",korean:"행",meaning:"fortune · luck"},{char:"福",korean:"복",meaning:"blessing · good fortune"}],
    examples:[{korean:"행복해요.",english:"I'm happy."},{korean:"행복을 찾아요.",english:"I'm looking for happiness."},{korean:"작은 것에서 행복을 느껴요.",english:"I find happiness in small things."}],
    related:["감정","사랑","가족","기쁨"] },

  "기쁨":{ korean:"기쁨", romanization:"gi-ppeum", hanja:null, english:"Joy / Delight", category:"감정 · Emotion",
    hanja_breakdown:[],
    examples:[{korean:"기쁨을 나눠요.",english:"Share the joy."},{korean:"기쁨의 눈물이에요.",english:"These are tears of joy."},{korean:"기쁨이 넘쳐요.",english:"I'm overflowing with joy."}],
    related:["행복","감정","웃음"] },

  "슬픔":{ korean:"슬픔", romanization:"seul-peum", hanja:null, english:"Sadness / Sorrow", category:"감정 · Emotion",
    hanja_breakdown:[],
    examples:[{korean:"슬픔을 감추지 마세요.",english:"Don't hide your sadness."},{korean:"슬픔이 밀려와요.",english:"Sadness is washing over me."},{korean:"슬픔을 이겨내요.",english:"Overcome the sadness."}],
    related:["감정","눈물","기분","위로"] },

  "위로":{ korean:"위로", romanization:"wi-ro", hanja:"慰勞", english:"Comfort / Consolation", category:"감정 · Emotion",
    hanja_breakdown:[{char:"慰",korean:"위",meaning:"comfort · console"},{char:"勞",korean:"로",meaning:"labor · console"}],
    examples:[{korean:"위로가 돼요.",english:"That's comforting."},{korean:"위로의 말이 필요해요.",english:"I need words of comfort."},{korean:"친구가 위로해줬어요.",english:"My friend comforted me."}],
    related:["슬픔","감정","사랑","친구"] },

  "사랑":{ korean:"사랑", romanization:"sa-rang", hanja:null, english:"Love", category:"감정 · Emotion",
    hanja_breakdown:[],
    examples:[{korean:"사랑해요.",english:"I love you."},{korean:"사랑이 넘쳐요.",english:"It's overflowing with love."},{korean:"진정한 사랑이에요.",english:"It's true love."}],
    related:["감정","행복","가족","그리움"] },

  "그리움":{ korean:"그리움", romanization:"geu-ri-um", hanja:null, english:"Longing / Yearning / Missing someone", category:"감정 · Emotion",
    hanja_breakdown:[],
    examples:[{korean:"그리움이 밀려와요.",english:"I'm overwhelmed with longing."},{korean:"너무 그리워요.",english:"I miss you so much."},{korean:"고향이 그리워요.",english:"I miss my hometown."}],
    related:["사랑","기억","감정","추억"] },

  "추억":{ korean:"추억", romanization:"chu-eok", hanja:"追憶", english:"Memory / Reminiscence", category:"감정 · Emotion",
    hanja_breakdown:[{char:"追",korean:"추",meaning:"pursue · recall"},{char:"憶",korean:"억",meaning:"recollect · remember"}],
    examples:[{korean:"추억이 새록새록해요.",english:"Memories come flooding back."},{korean:"좋은 추억을 만들어요.",english:"Let's make good memories."},{korean:"추억의 장소예요.",english:"It's a place full of memories."}],
    related:["기억","그리움","순간","감정"] },

  "기억":{ korean:"기억", romanization:"gi-eok", hanja:"記憶", english:"Memory / Recollection", category:"감정 · Emotion",
    hanja_breakdown:[{char:"記",korean:"기",meaning:"record · remember"},{char:"憶",korean:"억",meaning:"recollect · think of"}],
    examples:[{korean:"그 기억이 소중해요.",english:"That memory is precious."},{korean:"기억이 안 나요.",english:"I can't remember."},{korean:"좋은 기억을 만들어요.",english:"Let's make good memories."}],
    related:["순간","감정","당시","추억"] },

  "순간":{ korean:"순간", romanization:"sun-gan", hanja:"瞬間", english:"Moment / Instant", category:"감정 · Emotion",
    hanja_breakdown:[{char:"瞬",korean:"순",meaning:"blink · instant"},{char:"間",korean:"간",meaning:"between · interval"}],
    examples:[{korean:"그 순간을 잊을 수 없어요.",english:"I can't forget that moment."},{korean:"순간적으로 결정했어요.",english:"I decided in an instant."},{korean:"아름다운 순간이에요.",english:"It's a beautiful moment."}],
    related:["시간","기억","감정","기간"] },

  "웃음":{ korean:"웃음", romanization:"u-seum", hanja:null, english:"Laughter / Smile", category:"감정 · Emotion",
    hanja_breakdown:[],
    examples:[{korean:"웃음이 나요.",english:"I can't help laughing."},{korean:"웃음을 잃지 마세요.",english:"Don't lose your smile."},{korean:"웃음이 최고의 약이에요.",english:"Laughter is the best medicine."}],
    related:["행복","기쁨","감정"] },

  "눈물":{ korean:"눈물", romanization:"nun-mul", hanja:null, english:"Tears", category:"감정 · Emotion",
    hanja_breakdown:[],
    examples:[{korean:"눈물이 나요.",english:"Tears are coming."},{korean:"눈물을 참았어요.",english:"I held back my tears."},{korean:"기쁨의 눈물이에요.",english:"These are tears of joy."}],
    related:["슬픔","감정","기쁨"] },

  // ══════════════════════════════════════
  //  가족/관계 · Family & Relationships
  // ══════════════════════════════════════
  "가족":{ korean:"가족", romanization:"ga-jok", hanja:"家族", english:"Family", category:"가족 · Family",
    hanja_breakdown:[{char:"家",korean:"가",meaning:"house · home · family"},{char:"族",korean:"족",meaning:"clan · tribe · group"}],
    examples:[{korean:"가족이 소중해요.",english:"Family is precious."},{korean:"가족과 함께해요.",english:"I'm with my family."},{korean:"우리 가족은 다섯 명이에요.",english:"My family has five members."}],
    related:["부모","형제","사랑","집"] },

  "부모":{ korean:"부모", romanization:"bu-mo", hanja:"父母", english:"Parents", category:"가족 · Family",
    hanja_breakdown:[{char:"父",korean:"부",meaning:"father"},{char:"母",korean:"모",meaning:"mother"}],
    examples:[{korean:"부모님께 감사해요.",english:"I'm grateful to my parents."},{korean:"부모님이 보고 싶어요.",english:"I miss my parents."},{korean:"부모의 사랑이에요.",english:"It's parental love."}],
    related:["가족","아버지","어머니","사랑"] },

  "아버지":{ korean:"아버지", romanization:"a-beo-ji", hanja:null, english:"Father", category:"가족 · Family",
    hanja_breakdown:[],
    examples:[{korean:"아버지가 좋아요.",english:"I love my father."},{korean:"아버지처럼 돼요.",english:"I want to be like my father."},{korean:"아버지께 전화했어요.",english:"I called my father."}],
    related:["부모","가족","어머니"] },

  "어머니":{ korean:"어머니", romanization:"eo-meo-ni", hanja:null, english:"Mother", category:"가족 · Family",
    hanja_breakdown:[],
    examples:[{korean:"어머니가 보고 싶어요.",english:"I miss my mother."},{korean:"어머니의 음식이 최고예요.",english:"My mother's cooking is the best."},{korean:"어머니께 드렸어요.",english:"I gave it to my mother."}],
    related:["부모","가족","아버지"] },

  "형제":{ korean:"형제", romanization:"hyeong-je", hanja:"兄弟", english:"Siblings / Brothers", category:"가족 · Family",
    hanja_breakdown:[{char:"兄",korean:"형",meaning:"older brother"},{char:"弟",korean:"제",meaning:"younger brother"}],
    examples:[{korean:"형제가 있어요?",english:"Do you have siblings?"},{korean:"형제처럼 지내요.",english:"We get along like brothers."},{korean:"형제 사이가 좋아요.",english:"The siblings get along well."}],
    related:["가족","친구","우정"] },

  "친구":{ korean:"친구", romanization:"chin-gu", hanja:"親舊", english:"Friend", category:"가족 · Family",
    hanja_breakdown:[{char:"親",korean:"친",meaning:"close · parent · intimate"},{char:"舊",korean:"구",meaning:"old · former"}],
    examples:[{korean:"친구가 많아요.",english:"I have many friends."},{korean:"오랜 친구예요.",english:"We're old friends."},{korean:"친구가 도와줬어요.",english:"My friend helped me."}],
    related:["우정","가족","사랑","신뢰"] },

  "우정":{ korean:"우정", romanization:"u-jeong", hanja:"友情", english:"Friendship", category:"가족 · Family",
    hanja_breakdown:[{char:"友",korean:"우",meaning:"friend · friendly"},{char:"情",korean:"정",meaning:"feeling · affection"}],
    examples:[{korean:"우정이 소중해요.",english:"Friendship is precious."},{korean:"오랜 우정이에요.",english:"It's a long friendship."},{korean:"우정을 지켜요.",english:"Let's keep our friendship."}],
    related:["친구","사랑","신뢰"] },

  "신뢰":{ korean:"신뢰", romanization:"sin-roe", hanja:"信賴", english:"Trust / Confidence", category:"가족 · Family",
    hanja_breakdown:[{char:"信",korean:"신",meaning:"trust · believe"},{char:"賴",korean:"뢰",meaning:"rely · depend"}],
    examples:[{korean:"신뢰가 중요해요.",english:"Trust is important."},{korean:"신뢰를 쌓아요.",english:"We build trust."},{korean:"신뢰할 수 있어요.",english:"You can trust them."}],
    related:["친구","우정","사랑"] },

  "사람":{ korean:"사람", romanization:"sa-ram", hanja:null, english:"Person / People", category:"일상 · Daily Life",
    hanja_breakdown:[],
    examples:[{korean:"좋은 사람이에요.",english:"They're a good person."},{korean:"많은 사람들이 있어요.",english:"There are many people."},{korean:"어떤 사람이에요?",english:"What kind of person are they?"}],
    related:["인간","가족","친구","사회"] },

  "인간":{ korean:"인간", romanization:"in-gan", hanja:"人間", english:"Human Being / Mankind", category:"철학 · Philosophy",
    hanja_breakdown:[{char:"人",korean:"인",meaning:"person · human"},{char:"間",korean:"간",meaning:"between · among"}],
    examples:[{korean:"인간은 사회적 동물이에요.",english:"Humans are social animals."},{korean:"인간의 본성이에요.",english:"It's human nature."},{korean:"인간답게 살아요.",english:"Live like a human."}],
    related:["사람","동물","사회","공간"] },

  // ══════════════════════════════════════
  //  자연/계절 · Nature & Seasons
  // ══════════════════════════════════════
  "계절":{ korean:"계절", romanization:"gye-jeol", hanja:"季節", english:"Season", category:"자연 · Nature",
    hanja_breakdown:[{char:"季",korean:"계",meaning:"season · end of period"},{char:"節",korean:"절",meaning:"season · occasion · joint"}],
    examples:[{korean:"계절이 바뀌었어요.",english:"The season changed."},{korean:"어떤 계절을 좋아해요?",english:"Which season do you like?"},{korean:"계절마다 달라요.",english:"It's different every season."}],
    related:["봄","여름","가을","겨울","날씨"] },

  "봄":{ korean:"봄", romanization:"bom", hanja:null, english:"Spring", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"봄이 왔어요.",english:"Spring has come."},{korean:"봄꽃이 피어요.",english:"Spring flowers are blooming."},{korean:"봄 날씨예요.",english:"It's spring weather."}],
    related:["계절","꽃","따뜻함","새로움"] },

  "여름":{ korean:"여름", romanization:"yeo-reum", hanja:null, english:"Summer", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"여름이 더워요.",english:"Summer is hot."},{korean:"여름 방학이에요.",english:"It's summer vacation."},{korean:"여름에 바다에 가요.",english:"I go to the sea in summer."}],
    related:["계절","더위","바다","비"] },

  "가을":{ korean:"가을", romanization:"ga-eul", hanja:null, english:"Autumn / Fall", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"가을 단풍이 예뻐요.",english:"The autumn foliage is beautiful."},{korean:"가을 하늘이 높아요.",english:"The autumn sky is high."},{korean:"가을이 좋아요.",english:"I love autumn."}],
    related:["계절","단풍","추수","시간"] },

  "겨울":{ korean:"겨울", romanization:"gyeo-ul", hanja:null, english:"Winter", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"겨울이 추워요.",english:"Winter is cold."},{korean:"겨울에 눈이 와요.",english:"It snows in winter."},{korean:"겨울 옷을 입어요.",english:"I'm wearing winter clothes."}],
    related:["계절","눈","추위","설상가상"] },

  "하늘":{ korean:"하늘", romanization:"ha-neul", hanja:null, english:"Sky / Heaven", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"하늘이 파래요.",english:"The sky is blue."},{korean:"하늘을 봐요.",english:"Look at the sky."},{korean:"하늘이 높아요.",english:"The sky is high."}],
    related:["구름","바람","날씨","별"] },

  "바람":{ korean:"바람", romanization:"ba-ram", hanja:null, english:"Wind / Desire", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"바람이 불어요.",english:"The wind is blowing."},{korean:"시원한 바람이에요.",english:"It's a cool breeze."},{korean:"바람이 강해요.",english:"The wind is strong."}],
    related:["날씨","하늘","계절"] },

  "비":{ korean:"비", romanization:"bi", hanja:null, english:"Rain", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"비가 와요.",english:"It's raining."},{korean:"비가 많이 와요.",english:"It's raining a lot."},{korean:"비 맞았어요.",english:"I got rained on."}],
    related:["날씨","우산","여름","설상가상"] },

  "꽃":{ korean:"꽃", romanization:"kkot", hanja:null, english:"Flower", category:"자연 · Nature",
    hanja_breakdown:[],
    examples:[{korean:"꽃이 예뻐요.",english:"The flower is pretty."},{korean:"꽃을 선물했어요.",english:"I gave flowers as a gift."},{korean:"꽃이 피었어요.",english:"The flower bloomed."}],
    related:["봄","자연","사랑"] },

  "자연":{ korean:"자연", romanization:"ja-yeon", hanja:"自然", english:"Nature", category:"자연 · Nature",
    hanja_breakdown:[{char:"自",korean:"자",meaning:"self · natural"},{char:"然",korean:"연",meaning:"so · natural · like that"}],
    examples:[{korean:"자연이 아름다워요.",english:"Nature is beautiful."},{korean:"자연 속에서 쉬어요.",english:"I rest in nature."},{korean:"자연을 보호해요.",english:"Protect nature."}],
    related:["계절","환경","하늘","꽃"] },

  "환경":{ korean:"환경", romanization:"hwan-gyeong", hanja:"環境", english:"Environment", category:"자연 · Nature",
    hanja_breakdown:[{char:"環",korean:"환",meaning:"ring · surround"},{char:"境",korean:"경",meaning:"boundary · environment"}],
    examples:[{korean:"환경을 보호해요.",english:"Protect the environment."},{korean:"환경 문제예요.",english:"It's an environmental issue."},{korean:"환경이 중요해요.",english:"The environment is important."}],
    related:["자연","사회","문화"] },

  // ══════════════════════════════════════
  //  사회/문화 · Society & Culture
  // ══════════════════════════════════════
  "사회":{ korean:"사회", romanization:"sa-hoe", hanja:"社會", english:"Society", category:"사회 · Society",
    hanja_breakdown:[{char:"社",korean:"사",meaning:"society · company · shrine"},{char:"會",korean:"회",meaning:"gather · meet · group"}],
    examples:[{korean:"사회에 기여해요.",english:"I contribute to society."},{korean:"사회 문제예요.",english:"It's a social issue."},{korean:"사회생활을 해요.",english:"I have a social life."}],
    related:["문화","인간","역사","환경"] },

  "문화":{ korean:"문화", romanization:"mun-hwa", hanja:"文化", english:"Culture", category:"사회 · Society",
    hanja_breakdown:[{char:"文",korean:"문",meaning:"writing · culture"},{char:"化",korean:"화",meaning:"change · transform"}],
    examples:[{korean:"한국 문화가 좋아요.",english:"I like Korean culture."},{korean:"문화가 달라요.",english:"The culture is different."},{korean:"문화를 이해해요.",english:"I understand the culture."}],
    related:["역사","사회","시대","언어"] },

  "역사":{ korean:"역사", romanization:"yeok-sa", hanja:"歷史", english:"History", category:"역사 · History",
    hanja_breakdown:[{char:"歷",korean:"역",meaning:"pass through · experience"},{char:"史",korean:"사",meaning:"history · record"}],
    examples:[{korean:"역사를 배워요.",english:"I'm learning history."},{korean:"역사는 반복돼요.",english:"History repeats itself."},{korean:"한국 역사예요.",english:"It's Korean history."}],
    related:["시대","문화","세대"] },

  "세대":{ korean:"세대", romanization:"se-dae", hanja:"世代", english:"Generation", category:"사회 · Society",
    hanja_breakdown:[{char:"世",korean:"세",meaning:"world · generation"},{char:"代",korean:"대",meaning:"era · substitute"}],
    examples:[{korean:"다음 세대에게 전해요.",english:"Pass it on to the next generation."},{korean:"세대 차이가 있어요.",english:"There's a generation gap."},{korean:"우리 세대 이야기예요.",english:"It's a story of our generation."}],
    related:["시대","가족","사회","문화"] },

  "언어":{ korean:"언어", romanization:"eon-eo", hanja:"言語", english:"Language", category:"사회 · Society",
    hanja_breakdown:[{char:"言",korean:"언",meaning:"speak · word"},{char:"語",korean:"어",meaning:"language · speak"}],
    examples:[{korean:"한국어를 배워요.",english:"I'm learning Korean."},{korean:"언어가 달라요.",english:"The language is different."},{korean:"언어 능력이 중요해요.",english:"Language skills are important."}],
    related:["문화","소통","문자"] },

  "소통":{ korean:"소통", romanization:"so-tong", hanja:"疏通", english:"Communication / Connection", category:"사회 · Society",
    hanja_breakdown:[{char:"疏",korean:"소",meaning:"flow · communicate · loose"},{char:"通",korean:"통",meaning:"pass through · communicate"}],
    examples:[{korean:"소통이 중요해요.",english:"Communication is important."},{korean:"서로 소통해요.",english:"We communicate with each other."},{korean:"소통이 안 돼요.",english:"We're not communicating well."}],
    related:["언어","전화","관계","이해"] },

  "이해":{ korean:"이해", romanization:"i-hae", hanja:"理解", english:"Understanding / Comprehension", category:"사회 · Society",
    hanja_breakdown:[{char:"理",korean:"이",meaning:"reason · manage · logic"},{char:"解",korean:"해",meaning:"solve · understand · undo"}],
    examples:[{korean:"이해했어요.",english:"I understood."},{korean:"이해가 안 돼요.",english:"I don't understand."},{korean:"서로 이해해요.",english:"We understand each other."}],
    related:["소통","공부","지식"] },

  // ══════════════════════════════════════
  //  교육/지식 · Education & Knowledge
  // ══════════════════════════════════════
  "공부":{ korean:"공부", romanization:"gong-bu", hanja:"工夫", english:"Study / Learning", category:"교육 · Education",
    hanja_breakdown:[{char:"工",korean:"공",meaning:"work · craft"},{char:"夫",korean:"부",meaning:"man · husband · work"}],
    examples:[{korean:"공부해요.",english:"I'm studying."},{korean:"공부가 어려워요.",english:"Studying is difficult."},{korean:"열심히 공부했어요.",english:"I studied hard."}],
    related:["시험","학교","지식","노력"] },

  "학교":{ korean:"학교", romanization:"hak-gyo", hanja:"學校", english:"School", category:"교육 · Education",
    hanja_breakdown:[{char:"學",korean:"학",meaning:"learn · study"},{char:"校",korean:"교",meaning:"school · proofread"}],
    examples:[{korean:"학교에 가요.",english:"I go to school."},{korean:"학교가 재미있어요.",english:"School is fun."},{korean:"학교 친구예요.",english:"They're a school friend."}],
    related:["공부","시험","선생님","친구"] },

  "시험":{ korean:"시험", romanization:"si-heom", hanja:"試驗", english:"Test / Exam", category:"교육 · Education",
    hanja_breakdown:[{char:"試",korean:"시",meaning:"try · test"},{char:"驗",korean:"험",meaning:"verify · experience"}],
    examples:[{korean:"내일 시험이 있어요.",english:"I have a test tomorrow."},{korean:"시험을 잘 봤어요.",english:"I did well on the exam."},{korean:"시험 공부를 해요.",english:"I'm studying for the exam."}],
    related:["공부","학교","결과"] },

  "지식":{ korean:"지식", romanization:"ji-sik", hanja:"知識", english:"Knowledge", category:"교육 · Education",
    hanja_breakdown:[{char:"知",korean:"지",meaning:"know · wisdom"},{char:"識",korean:"식",meaning:"know · recognize"}],
    examples:[{korean:"지식이 힘이에요.",english:"Knowledge is power."},{korean:"지식을 쌓아요.",english:"I'm building knowledge."},{korean:"지식을 나눠요.",english:"I'm sharing knowledge."}],
    related:["공부","이해","지혜"] },

  "지혜":{ korean:"지혜", romanization:"ji-hye", hanja:"智慧", english:"Wisdom", category:"교육 · Education",
    hanja_breakdown:[{char:"智",korean:"지",meaning:"wisdom · knowledge"},{char:"慧",korean:"혜",meaning:"wisdom · clever"}],
    examples:[{korean:"지혜로운 사람이에요.",english:"They're a wise person."},{korean:"경험에서 지혜가 나와요.",english:"Wisdom comes from experience."},{korean:"지혜를 배워요.",english:"I'm learning wisdom."}],
    related:["지식","경험","나이"] },

  "경험":{ korean:"경험", romanization:"gyeong-heom", hanja:"經驗", english:"Experience", category:"교육 · Education",
    hanja_breakdown:[{char:"經",korean:"경",meaning:"pass through · manage · classic"},{char:"驗",korean:"험",meaning:"verify · experience"}],
    examples:[{korean:"경험이 중요해요.",english:"Experience is important."},{korean:"좋은 경험이에요.",english:"It's a good experience."},{korean:"경험에서 배워요.",english:"I learn from experience."}],
    related:["지혜","기억","성공","노력"] },

  // ══════════════════════════════════════
  //  시간 · Time
  // ══════════════════════════════════════
  "시계":{ korean:"시계", romanization:"si-gye", hanja:"時計", english:"Clock / Watch", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"時",korean:"시",meaning:"time · hour"},{char:"計",korean:"계",meaning:"measure · count"}],
    examples:[{korean:"시계가 멈췄어요.",english:"The clock stopped."},{korean:"시계를 봐요.",english:"I'm looking at the watch."},{korean:"시계가 빨라요.",english:"The clock is fast."}],
    related:["시간","시작"] },

  "기간":{ korean:"기간", romanization:"gi-gan", hanja:"期間", english:"Period / Duration", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"期",korean:"기",meaning:"period · term"},{char:"間",korean:"간",meaning:"between · interval"}],
    examples:[{korean:"기간이 얼마예요?",english:"How long is the period?"},{korean:"세 달 기간이에요.",english:"It's a three-month period."},{korean:"기간을 연장해요.",english:"They extended the period."}],
    related:["시간","날짜","순간"] },

  "날짜":{ korean:"날짜", romanization:"nal-jja", hanja:null, english:"Date", category:"일상 · Daily Life",
    hanja_breakdown:[],
    examples:[{korean:"날짜가 언제예요?",english:"What's the date?"},{korean:"날짜를 정해요.",english:"Let's set a date."},{korean:"날짜를 잊었어요.",english:"I forgot the date."}],
    related:["시간","기간","약속"] },

  "미래":{ korean:"미래", romanization:"mi-rae", hanja:"未來", english:"Future", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"未",korean:"미",meaning:"not yet · future"},{char:"來",korean:"래",meaning:"come · future"}],
    examples:[{korean:"미래가 밝아요.",english:"The future is bright."},{korean:"미래를 준비해요.",english:"I'm preparing for the future."},{korean:"미래가 기대돼요.",english:"I'm looking forward to the future."}],
    related:["시간","희망","꿈","현재"] },

  "현재":{ korean:"현재", romanization:"hyeon-jae", hanja:"現在", english:"Present / Now", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"現",korean:"현",meaning:"appear · present"},{char:"在",korean:"재",meaning:"exist · be present"}],
    examples:[{korean:"현재 상황이에요.",english:"It's the current situation."},{korean:"현재에 집중해요.",english:"Focus on the present."},{korean:"현재 어디 있어요?",english:"Where are you now?"}],
    related:["미래","과거","시간"] },

  "과거":{ korean:"과거", romanization:"gwa-geo", hanja:"過去", english:"Past", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"過",korean:"과",meaning:"pass · go beyond"},{char:"去",korean:"거",meaning:"go · leave · past"}],
    examples:[{korean:"과거를 잊어요.",english:"Forget the past."},{korean:"과거에서 배워요.",english:"Learn from the past."},{korean:"과거가 현재를 만들어요.",english:"The past shapes the present."}],
    related:["현재","미래","기억","역사"] },

  // ══════════════════════════════════════
  //  공간/장소 · Space & Place
  // ══════════════════════════════════════
  "공간":{ korean:"공간", romanization:"gong-gan", hanja:"空間", english:"Space / Room", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"空",korean:"공",meaning:"empty · sky"},{char:"間",korean:"간",meaning:"between · space"}],
    examples:[{korean:"공간이 넓어요.",english:"The space is wide."},{korean:"개인 공간이 필요해요.",english:"I need personal space."},{korean:"아늑한 공간이에요.",english:"It's a cozy space."}],
    related:["방","장소","시간","인간"] },

  "장소":{ korean:"장소", romanization:"jang-so", hanja:"場所", english:"Place / Location", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"場",korean:"장",meaning:"place · field · market"},{char:"所",korean:"소",meaning:"place · location"}],
    examples:[{korean:"장소가 어디예요?",english:"Where's the location?"},{korean:"좋은 장소예요.",english:"It's a good place."},{korean:"장소를 정해요.",english:"Let's decide on a place."}],
    related:["공간","방","약속"] },

  "집":{ korean:"집", romanization:"jip", hanja:null, english:"House / Home", category:"일상 · Daily Life",
    hanja_breakdown:[],
    examples:[{korean:"집에 가요.",english:"I'm going home."},{korean:"집이 편해요.",english:"Home is comfortable."},{korean:"집에 있어요.",english:"I'm at home."}],
    related:["가족","방","공간"] },

  "방":{ korean:"방", romanization:"bang", hanja:"房", english:"Room", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"房",korean:"방",meaning:"room · chamber"}],
    examples:[{korean:"방이 깨끗해요.",english:"The room is clean."},{korean:"내 방이에요.",english:"It's my room."},{korean:"방에서 쉬어요.",english:"I'm resting in my room."}],
    related:["집","공간","장소"] },

  "중간":{ korean:"중간", romanization:"jung-gan", hanja:"中間", english:"Middle / Halfway", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"中",korean:"중",meaning:"middle · center"},{char:"間",korean:"간",meaning:"between · interval"}],
    examples:[{korean:"중간에 멈췄어요.",english:"I stopped in the middle."},{korean:"중간 지점이에요.",english:"It's the midpoint."},{korean:"중간 정도예요.",english:"It's about halfway."}],
    related:["처음","끝","공간"] },

  // ══════════════════════════════════════
  //  朝·三·暮·四·食 연결 단어
  // ══════════════════════════════════════
  "조회":{ korean:"조회", romanization:"jo-hoe", hanja:"朝會", english:"Morning assembly", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"朝",korean:"조",meaning:"morning · dawn"},{char:"會",korean:"회",meaning:"gather · meet"}],
    examples:[{korean:"아침에 조회가 있어요.",english:"There's a morning assembly."},{korean:"조회 시간이에요.",english:"It's assembly time."},{korean:"조회에서 발표했어요.",english:"I presented at the assembly."}],
    related:["조식","시간","아침"] },

  "조기":{ korean:"조기", romanization:"jo-gi", hanja:"早期", english:"Early stage / Early on", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"早",korean:"조",meaning:"early · morning"},{char:"期",korean:"기",meaning:"period · term"}],
    examples:[{korean:"조기 발견이 중요해요.",english:"Early detection is important."},{korean:"조기에 시작했어요.",english:"We started early on."},{korean:"조기 교육이에요.",english:"It's early education."}],
    related:["시작","기간","시간"] },

  "삼각":{ korean:"삼각", romanization:"sam-gak", hanja:"三角", english:"Triangle", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"三",korean:"삼",meaning:"three"},{char:"角",korean:"각",meaning:"corner · angle"}],
    examples:[{korean:"삼각형이에요.",english:"It's a triangle."},{korean:"삼각 관계예요.",english:"It's a love triangle."},{korean:"삼각지에서 만나요.",english:"Let's meet at the triangle junction."}],
    related:["사각","중간"] },

  "삼세번":{ korean:"삼세번", romanization:"sam-se-beon", hanja:null, english:"Third time's the charm", category:"일상 · Daily Life",
    hanja_breakdown:[],
    examples:[{korean:"삼세번은 해봐야죠.",english:"You have to try three times."},{korean:"삼세번 만에 성공했어요.",english:"I succeeded on the third try."},{korean:"삼세번이라고 다시 해봐요.",english:"Third time's the charm — try again."}],
    related:["시작","순간"] },

  "삼일":{ korean:"삼일", romanization:"sam-il", hanja:"三日", english:"Three days", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"三",korean:"삼",meaning:"three"},{char:"日",korean:"일",meaning:"day · sun"}],
    examples:[{korean:"삼일 후에 만나요.",english:"Let's meet in three days."},{korean:"삼일 동안 쉬었어요.",english:"I rested for three days."},{korean:"삼일절이에요.",english:"It's March 1st Independence Day."}],
    related:["기간","시간","날짜"] },

  "세모":{ korean:"세모", romanization:"se-mo", hanja:"歲暮", english:"Year-end", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"歲",korean:"세",meaning:"year · age"},{char:"暮",korean:"모",meaning:"evening · end"}],
    examples:[{korean:"세모가 다가왔어요.",english:"Year-end is approaching."},{korean:"세모에 바빠요.",english:"I'm busy at year-end."},{korean:"세모 분위기예요.",english:"It has a year-end atmosphere."}],
    related:["세대","시간","기간"] },

  "모경":{ korean:"모경", romanization:"mo-gyeong", hanja:"暮景", english:"Evening scenery", category:"자연 · Nature",
    hanja_breakdown:[{char:"暮",korean:"모",meaning:"evening · dusk"},{char:"景",korean:"경",meaning:"scenery · view"}],
    examples:[{korean:"모경이 아름다워요.",english:"The evening scenery is beautiful."},{korean:"강변 모경을 봤어요.",english:"I saw the twilight scene by the river."},{korean:"모경에 물들었어요.",english:"It was bathed in twilight glow."}],
    related:["순간","감정"] },

  "사계":{ korean:"사계", romanization:"sa-gye", hanja:"四季", english:"Four seasons", category:"자연 · Nature",
    hanja_breakdown:[{char:"四",korean:"사",meaning:"four"},{char:"季",korean:"계",meaning:"season"}],
    examples:[{korean:"한국은 사계가 뚜렷해요.",english:"Korea has four distinct seasons."},{korean:"사계절 모두 좋아요.",english:"I like all four seasons."},{korean:"사계의 변화가 아름다워요.",english:"The change of the four seasons is beautiful."}],
    related:["계절","문화","시간"] },

  "사방":{ korean:"사방", romanization:"sa-bang", hanja:"四方", english:"All directions / Everywhere", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"四",korean:"사",meaning:"four"},{char:"方",korean:"방",meaning:"direction · side"}],
    examples:[{korean:"사방이 산으로 둘러싸여 있어요.",english:"It's surrounded by mountains on all sides."},{korean:"사방을 둘러봤어요.",english:"I looked around in all directions."},{korean:"소문이 사방으로 퍼졌어요.",english:"The rumor spread everywhere."}],
    related:["공간","중간"] },

  "사각":{ korean:"사각", romanization:"sa-gak", hanja:"四角", english:"Square / Four-cornered", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"四",korean:"사",meaning:"four"},{char:"角",korean:"각",meaning:"corner · angle"}],
    examples:[{korean:"사각형이에요.",english:"It's a square."},{korean:"사각 지대예요.",english:"It's a blind spot."},{korean:"사각 팬티예요.",english:"They're boxer shorts."}],
    related:["삼각","공간"] },

  "시대":{ korean:"시대", romanization:"si-dae", hanja:"時代", english:"Era / Age / Period", category:"역사 · History",
    hanja_breakdown:[{char:"時",korean:"시",meaning:"time · hour"},{char:"代",korean:"대",meaning:"generation · era"}],
    examples:[{korean:"조선 시대예요.",english:"It's the Joseon era."},{korean:"현대 시대에 살아요.",english:"We live in the modern age."},{korean:"그 시대는 달랐어요.",english:"That era was different."}],
    related:["역사","문화","세대","시간"] },

  "당시":{ korean:"당시", romanization:"dang-si", hanja:"當時", english:"At that time / Back then", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"當",korean:"당",meaning:"correspond · at the time"},{char:"時",korean:"시",meaning:"time · moment"}],
    examples:[{korean:"당시에는 몰랐어요.",english:"I didn't know at that time."},{korean:"당시 상황이 달랐어요.",english:"The situation back then was different."},{korean:"당시를 기억해요.",english:"I remember that time."}],
    related:["그때","지금","기억"] },

  "임시":{ korean:"임시", romanization:"im-si", hanja:"臨時", english:"Temporary / Provisional", category:"일상 · Daily Life",
    hanja_breakdown:[{char:"臨",korean:"임",meaning:"face · temporary"},{char:"時",korean:"시",meaning:"time · moment"}],
    examples:[{korean:"임시 방편이에요.",english:"It's a temporary measure."},{korean:"임시로 써요.",english:"I'm using it temporarily."},{korean:"임시 직원이에요.",english:"They're a temporary employee."}],
    related:["잠깐","시간"] }
};

// ═══════════════════════════════════════════════════════════════
//  STUDY LIST — main flashcard order
// ═══════════════════════════════════════════════════════════════
const STUDY_LIST = [
  "시간","가족","행복","사랑","사람","기억","감정","순간",
  "세대","역사","문화","계절","자연","건강","운동","노력",
  "성공","친구","우정","사회","언어","공부","지식","미래"
];

// ═══════════════════════════════════════════════════════════════
//  HANJA DATABASE
// ═══════════════════════════════════════════════════════════════
const HANJA_DB = {
  "時":{char:"時",korean:"시",meaning:"time · hour",note:"Used in words about time and moments",words:["시간","시작","시대","시험","당시","임시","시계"]},
  "間":{char:"間",korean:"간",meaning:"between · interval · space",note:"Used in words about spaces and intervals",words:["시간","공간","인간","기간","중간","순간"]},
  "始":{char:"始",korean:"시",meaning:"begin · start",note:"Words about beginnings",words:["시작"]},
  "作":{char:"作",korean:"작",meaning:"make · create",note:"Words about making things",words:["시작"]},
  "代":{char:"代",korean:"대",meaning:"generation · era",note:"Words about time periods",words:["시대","세대"]},
  "空":{char:"空",korean:"공",meaning:"empty · sky",note:"Words about emptiness and sky",words:["공간"]},
  "人":{char:"人",korean:"인",meaning:"person · human",note:"Words about people",words:["인간"]},
  "中":{char:"中",korean:"중",meaning:"middle · center",note:"Words about the middle",words:["중간"]},
  "瞬":{char:"瞬",korean:"순",meaning:"blink · instant",note:"Words about brief moments",words:["순간"]},
  "世":{char:"世",korean:"세",meaning:"world · generation",note:"Words about the world",words:["세대"]},
  "記":{char:"記",korean:"기",meaning:"record · remember",note:"Words about recording",words:["기억"]},
  "憶":{char:"憶",korean:"억",meaning:"recollect · think of",note:"Words about memory",words:["기억","추억"]},
  "感":{char:"感",korean:"감",meaning:"feel · sense",note:"Words about feelings",words:["감정"]},
  "情":{char:"情",korean:"정",meaning:"feeling · affection",note:"Words about emotions",words:["감정","우정"]},
  "家":{char:"家",korean:"가",meaning:"house · home · family",note:"Words about home and family",words:["가족"]},
  "族":{char:"族",korean:"족",meaning:"clan · tribe · group",note:"Words about groups of people",words:["가족"]},
  "幸":{char:"幸",korean:"행",meaning:"fortune · luck",note:"Words about good fortune",words:["행복"]},
  "福":{char:"福",korean:"복",meaning:"blessing · good fortune",note:"Words about blessings",words:["행복"]},
  "計":{char:"計",korean:"계",meaning:"measure · count",note:"Words about measuring",words:["시계"]},
  "歷":{char:"歷",korean:"역",meaning:"pass through · experience",note:"Words about experience",words:["역사","경험"]},
  "史":{char:"史",korean:"사",meaning:"history · record",note:"Words about records",words:["역사"]},
  "文":{char:"文",korean:"문",meaning:"writing · culture",note:"Words about culture and writing",words:["문화","문자"]},
  "化":{char:"化",korean:"화",meaning:"change · transform",note:"Words about change",words:["문화","변화"]},
  "朝":{char:"朝",korean:"조",meaning:"morning · dynasty",note:"Words about morning and time",words:["조식","조회","조기"]},
  "三":{char:"三",korean:"삼",meaning:"three",note:"Words using the number three",words:["삼각","삼세번","삼일"]},
  "暮":{char:"暮",korean:"모",meaning:"evening · dusk · end",note:"Words about evening and endings",words:["세모","모경"]},
  "四":{char:"四",korean:"사",meaning:"four",note:"Words using the number four",words:["사계","사방","사각"]},
  "食":{char:"食",korean:"식",meaning:"eat · food",note:"Words about eating and food",words:["조식","식사","식당","식품","음식","급식"]},
  "飮":{char:"飮",korean:"음",meaning:"drink · consume",note:"Words about drinking and consuming",words:["음식"]},
  "堂":{char:"堂",korean:"당",meaning:"hall · building",note:"Words about buildings and halls",words:["식당"]},
  "品":{char:"品",korean:"품",meaning:"product · quality",note:"Words about products and quality",words:["식품"]},
  "給":{char:"給",korean:"급",meaning:"supply · provide",note:"Words about supplying and providing",words:["급식"]},
  "事":{char:"事",korean:"사",meaning:"matter · affair · work",note:"Words about matters and work",words:["식사"]},
  "角":{char:"角",korean:"각",meaning:"corner · angle",note:"Words about corners and angles",words:["삼각","사각"]},
  "季":{char:"季",korean:"계",meaning:"season · end of period",note:"Words about seasons",words:["계절","사계"]},
  "節":{char:"節",korean:"절",meaning:"season · occasion",note:"Words about occasions",words:["계절"]},
  "父":{char:"父",korean:"부",meaning:"father",note:"Words about fathers and family",words:["부모"]},
  "母":{char:"母",korean:"모",meaning:"mother",note:"Words about mothers and family",words:["부모"]},
  "兄":{char:"兄",korean:"형",meaning:"older brother",note:"Words about siblings",words:["형제"]},
  "弟":{char:"弟",korean:"제",meaning:"younger brother",note:"Words about siblings",words:["형제"]},
  "親":{char:"親",korean:"친",meaning:"close · intimate · parent",note:"Words about closeness",words:["친구"]},
  "友":{char:"友",korean:"우",meaning:"friend",note:"Words about friendship",words:["우정"]},
  "信":{char:"信",korean:"신",meaning:"trust · believe",note:"Words about trust and belief",words:["신뢰"]},
  "學":{char:"學",korean:"학",meaning:"learn · study",note:"Words about learning",words:["학교","공부"]},
  "校":{char:"校",korean:"교",meaning:"school",note:"Words about schools",words:["학교"]},
  "知":{char:"知",korean:"지",meaning:"know · wisdom",note:"Words about knowledge",words:["지식","지혜"]},
  "識":{char:"識",korean:"식",meaning:"know · recognize",note:"Words about recognition",words:["지식"]},
  "自":{char:"自",korean:"자",meaning:"self · natural",note:"Words about the self and nature",words:["자연"]},
  "然":{char:"然",korean:"연",meaning:"natural · so",note:"Words about nature",words:["자연"]},
  "社":{char:"社",korean:"사",meaning:"society · company",note:"Words about society",words:["사회"]},
  "會":{char:"會",korean:"회",meaning:"gather · meet",note:"Words about gathering",words:["사회","조회"]},
  "言":{char:"言",korean:"언",meaning:"speak · word",note:"Words about speaking",words:["언어"]},
  "語":{char:"語",korean:"어",meaning:"language · speak",note:"Words about language",words:["언어"]},
  "未":{char:"未",korean:"미",meaning:"not yet · future",note:"Words about the future",words:["미래"]},
  "來":{char:"來",korean:"래",meaning:"come · future",note:"Words about coming and future",words:["미래"]},
  "現":{char:"現",korean:"현",meaning:"appear · present",note:"Words about the present",words:["현재"]},
  "過":{char:"過",korean:"과",meaning:"pass · go beyond",note:"Words about passing",words:["과거"]},
  "追":{char:"追",korean:"추",meaning:"pursue · recall",note:"Words about chasing and recalling",words:["추억"]},
  "健":{char:"健",korean:"건",meaning:"healthy · strong",note:"Words about health",words:["건강"]},
  "康":{char:"康",korean:"강",meaning:"peaceful · healthy",note:"Words about well-being",words:["건강"]},
  "運":{char:"運",korean:"운",meaning:"move · transport · luck",note:"Words about movement and luck",words:["운동"]},
  "動":{char:"動",korean:"동",meaning:"move · action",note:"Words about movement",words:["운동"]},
  "成":{char:"成",korean:"성",meaning:"achieve · become",note:"Words about achievement",words:["성공"]},
  "功":{char:"功",korean:"공",meaning:"achievement · merit",note:"Words about merit",words:["성공"]},
  "努":{char:"努",korean:"노",meaning:"strive · exert",note:"Words about effort",words:["노력"]},
  "力":{char:"力",korean:"력",meaning:"power · strength",note:"Words about strength",words:["노력"]},
  "結":{char:"結",korean:"결",meaning:"tie · conclude",note:"Words about conclusions",words:["결과"]},
  "果":{char:"果",korean:"과",meaning:"fruit · result",note:"Words about results",words:["결과"]},
  "電":{char:"電",korean:"전",meaning:"electricity · lightning",note:"Words about electricity",words:["전화"]},
  "話":{char:"話",korean:"화",meaning:"talk · speech",note:"Words about talking",words:["전화"]},
  "字":{char:"字",korean:"자",meaning:"character · letter",note:"Words about characters",words:["문자"]},
  "料":{char:"料",korean:"료",meaning:"material · measure",note:"Words about materials",words:["요리","재료"]},
  "理":{char:"理",korean:"리",meaning:"reason · manage · logic",note:"Words about reason and logic",words:["요리","이해"]},
  "材":{char:"材",korean:"재",meaning:"material · timber",note:"Words about materials",words:["재료"]},
  "環":{char:"環",korean:"환",meaning:"ring · surround",note:"Words about surroundings",words:["환경"]},
  "境":{char:"境",korean:"경",meaning:"boundary · environment",note:"Words about boundaries",words:["환경"]},
  "場":{char:"場",korean:"장",meaning:"place · field",note:"Words about places",words:["장소"]},
  "所":{char:"所",korean:"소",meaning:"place · location",note:"Words about locations",words:["장소"]},
  "工":{char:"工",korean:"공",meaning:"work · craft",note:"Words about work and craft",words:["공부"]},
  "約":{char:"約",korean:"약",meaning:"promise · approximately",note:"Words about promises",words:["약속"]},
  "束":{char:"束",korean:"속",meaning:"bind · bundle",note:"Words about binding",words:["약속"]}
};

// ═══════════════════════════════════════════════════════════════
//  IDIOMS DATABASE
// ═══════════════════════════════════════════════════════════════
const IDIOMS = {
  "조삼모사":{
    korean:"조삼모사",hanja:"朝三暮四",romanization:"jo-sam-mo-sa",
    english:"Being fooled by superficial changes",
    literal:"Morning three, evening four",situation:"🎭 Tricks & Deception",
    chars:[{char:"朝",korean:"조",meaning:"morning · dawn"},{char:"三",korean:"삼",meaning:"three"},{char:"暮",korean:"모",meaning:"evening · dusk"},{char:"四",korean:"사",meaning:"four"}],
    origin:"A man in Song Dynasty China kept monkeys. He said he'd give them 3 acorns in the morning and 4 at night — they were furious. He switched to 4 in the morning and 3 at night — they were delighted. The total was the same. Used to describe being tricked by trivial differences.",
    examples:[
      {korean:"월급은 같은데 지급 방식만 바꿨어요. 조삼모사네요.",english:"The salary is the same, just the payment method changed. Classic 조삼모사."},
      {korean:"할인처럼 보이지만 원래 가격이에요. 완전 조삼모사잖아요.",english:"It looks like a discount but it's the original price. Total 조삼모사."},
      {korean:"말만 바꿨지 결과는 똑같아요. 조삼모사예요.",english:"They just changed the wording, the result is the same."}
    ],related_idioms:["오리무중"],related_words:[]},

  "새옹지마":{
    korean:"새옹지마",hanja:"塞翁之馬",romanization:"sae-ong-ji-ma",
    english:"Every cloud has a silver lining",
    literal:"The old man of the frontier's horse",situation:"🌿 Life & Wisdom",
    chars:[{char:"塞",korean:"새",meaning:"frontier · border"},{char:"翁",korean:"옹",meaning:"old man · elder"},{char:"之",korean:"지",meaning:"of · possessive"},{char:"馬",korean:"마",meaning:"horse"}],
    origin:"An old man lost his horse — neighbors pitied him. The horse returned with a wild horse. His son broke his leg riding it. Then war came and all able-bodied men died, but his son survived. Good and bad fortune are unpredictable.",
    examples:[
      {korean:"실직했지만 더 좋은 기회가 생겼어요. 새옹지마예요.",english:"I lost my job but a better opportunity came. That's 새옹지마."},
      {korean:"인생은 새옹지마라고 너무 슬퍼하지 마세요.",english:"Life is 새옹지마, so don't be too sad."},
      {korean:"그 사고가 오히려 행운이었어요. 새옹지마네요.",english:"That accident was actually lucky. 새옹지마 indeed."}
    ],related_idioms:["유비무환","설상가상"],related_words:["행복","기억"]},

  "유비무환":{
    korean:"유비무환",hanja:"有備無患",romanization:"yu-bi-mu-hwan",
    english:"Preparedness prevents disaster",
    literal:"Having preparation means no worry",situation:"🌿 Life & Wisdom",
    chars:[{char:"有",korean:"유",meaning:"have · exist"},{char:"備",korean:"비",meaning:"prepare · ready"},{char:"無",korean:"무",meaning:"nothing · without"},{char:"患",korean:"환",meaning:"worry · disaster"}],
    origin:"From ancient Chinese classic 書經. A ruler was advised: 'If you are always prepared, you will have no disasters.' Similar to 'An ounce of prevention is worth a pound of cure.'",
    examples:[
      {korean:"우산을 항상 가지고 다녀요. 유비무환이잖아요.",english:"I always carry an umbrella. That's 유비무환."},
      {korean:"유비무환이라고 미리 저축해 두세요.",english:"As they say, 유비무환 — save money in advance."},
      {korean:"비상약을 챙겨요. 유비무환이에요.",english:"Pack emergency medicine. 유비무환."}
    ],related_idioms:["새옹지마"],related_words:["시간","기간"]},

  "백년해로":{
    korean:"백년해로",hanja:"百年偕老",romanization:"baek-nyeon-hae-ro",
    english:"To grow old together for a hundred years",
    literal:"A hundred years, growing old together",situation:"💕 Love & Relationships",
    chars:[{char:"百",korean:"백",meaning:"hundred"},{char:"年",korean:"년",meaning:"year"},{char:"偕",korean:"해",meaning:"together · side by side"},{char:"老",korean:"로",meaning:"old · aged"}],
    origin:"A traditional Korean blessing for newlyweds. The wish that a couple will live harmoniously together until they are old. Often said at weddings.",
    examples:[
      {korean:"결혼을 축하해요! 백년해로하세요.",english:"Congratulations on your wedding! May you grow old together."},
      {korean:"우리 백년해로하자.",english:"Let's grow old together."},
      {korean:"두 분이 백년해로하실 것 같아요.",english:"You two look like you'll grow old together."}
    ],related_idioms:["이심전심"],related_words:["사랑","가족","행복"]},

  "이심전심":{
    korean:"이심전심",hanja:"以心傳心",romanization:"i-sim-jeon-sim",
    english:"Heart to heart understanding without words",
    literal:"Transmitting heart through heart",situation:"💕 Love & Relationships",
    chars:[{char:"以",korean:"이",meaning:"by means of · using"},{char:"心",korean:"심",meaning:"heart · mind"},{char:"傳",korean:"전",meaning:"transmit · pass on"},{char:"心",korean:"심",meaning:"heart · mind"}],
    origin:"Originally a Buddhist term — the Buddha transmitted enlightenment to his disciple without words, just through a silent smile at a flower. Now used for deep mutual understanding between people who don't need words.",
    examples:[
      {korean:"말 안 해도 알아요. 이심전심이에요.",english:"I know without being told. That's 이심전심."},
      {korean:"우리는 이심전심이라 눈빛만 봐도 알아요.",english:"We have 이심전심 — just one look and we understand."},
      {korean:"오랜 친구라 이심전심으로 통해요.",english:"We've been friends so long, we have 이심전심."}
    ],related_idioms:["백년해로"],related_words:["감정","사랑","기억"]},

  "형설지공":{
    korean:"형설지공",hanja:"螢雪之功",romanization:"hyeong-seol-ji-gong",
    english:"Achievement through hardship and perseverance",
    literal:"The achievement of firefly and snow light",situation:"💪 Effort & Success",
    chars:[{char:"螢",korean:"형",meaning:"firefly"},{char:"雪",korean:"설",meaning:"snow"},{char:"之",korean:"지",meaning:"of · possessive"},{char:"功",korean:"공",meaning:"achievement · merit"}],
    origin:"Two stories: Car Yin was too poor for lamp oil so he studied by firefly light. Sun Kang studied by reflecting moonlight off snow. Both achieved great success despite poverty.",
    examples:[
      {korean:"형설지공으로 드디어 합격했어요.",english:"Through 형설지공, I finally passed."},
      {korean:"그의 성공은 형설지공의 결과예요.",english:"His success is the result of 형설지공."},
      {korean:"형설지공 정신으로 공부했어요.",english:"I studied with the spirit of 형설지공."}
    ],related_idioms:["우공이산"],related_words:["공부","시험","노력"]},

  "우공이산":{
    korean:"우공이산",hanja:"愚公移山",romanization:"u-gong-i-san",
    english:"Persistence can move mountains",
    literal:"The foolish old man moves the mountain",situation:"💪 Effort & Success",
    chars:[{char:"愚",korean:"우",meaning:"foolish · stupid"},{char:"公",korean:"공",meaning:"public · honorific"},{char:"移",korean:"이",meaning:"move · shift"},{char:"山",korean:"산",meaning:"mountain"}],
    origin:"An old man blocked by two huge mountains decided to dig them away. When mocked, he said his sons and grandsons would continue. God was moved by his determination and moved the mountains.",
    examples:[
      {korean:"우공이산이라고 매일 조금씩 하다 보면 돼요.",english:"Like 우공이산, doing a little every day will get you there."},
      {korean:"포기하지 마세요. 우공이산 정신이에요.",english:"Don't give up. That's the spirit of 우공이산."},
      {korean:"우공이산처럼 꾸준히 노력했어요.",english:"I worked steadily like 우공이산."}
    ],related_idioms:["형설지공"],related_words:["노력","성공","시작"]},

  "오리무중":{
    korean:"오리무중",hanja:"五里霧中",romanization:"o-ri-mu-jung",
    english:"Completely lost / In a total fog",
    literal:"Inside a five-ri fog",situation:"🎭 Daily Situations",
    chars:[{char:"五",korean:"오",meaning:"five"},{char:"里",korean:"리",meaning:"ri (unit of distance)"},{char:"霧",korean:"무",meaning:"fog · mist"},{char:"中",korean:"중",meaning:"middle · inside"}],
    origin:"A Taoist master could create a five-ri thick fog making it impossible to find direction. Used when you have absolutely no clue what is happening.",
    examples:[
      {korean:"그 사람 요즘 어디 있는지 오리무중이에요.",english:"Where that person is these days is a complete mystery."},
      {korean:"회의 결과가 오리무중이에요.",english:"The result of the meeting is totally up in the air."},
      {korean:"범인이 누군지 아직 오리무중이에요.",english:"Who the culprit is still remains a complete fog."}
    ],related_idioms:["조삼모사"],related_words:["중간","시간"]},

  "설상가상":{
    korean:"설상가상",hanja:"雪上加霜",romanization:"seol-sang-ga-sang",
    english:"Adding insult to injury / From bad to worse",
    literal:"Adding frost on top of snow",situation:"🎭 Daily Situations",
    chars:[{char:"雪",korean:"설",meaning:"snow"},{char:"上",korean:"상",meaning:"above · on top"},{char:"加",korean:"가",meaning:"add · plus"},{char:"霜",korean:"상",meaning:"frost"}],
    origin:"Snow is already cold and difficult, but then frost is added on top. Used when bad things keep piling up, making a difficult situation even worse. Like 'When it rains, it pours.'",
    examples:[
      {korean:"차가 고장났는데 설상가상으로 비까지 와요.",english:"My car broke down and to make it worse, it's raining."},
      {korean:"설상가상으로 지갑도 잃어버렸어요.",english:"To top it all off, I lost my wallet too."},
      {korean:"요즘 설상가상으로 일이 쌓이네요.",english:"Lately things keep piling up, one after another."}
    ],related_idioms:["새옹지마"],related_words:["감정","기억"]}
};
