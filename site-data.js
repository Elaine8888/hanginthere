const siteData = {
  categories: [
    {
      id: "reading",
      name: "Reading",
      icon: "📖",
      description: "阅读题型练习",
      types: [
        {
          id: "complete-the-words",
          name: "Complete the Words",
          description: "现有刷题页入口。",
          status: "external",
          externalHref: "./complete-the-words.html",
          note: "把你原来正在使用的 Complete the Words 页面文件重命名为 complete-the-words.html。"
        },
        {
          id: "read-in-daily-life",
          name: "Read in Daily Life",
          description: "生活类阅读题型，内容待补充。",
          status: "empty"
        },
        {
          id: "read-an-academic-passage",
          name: "Read an Academic Passage",
          description: "学术阅读题型，内容待补充。",
          status: "empty"
        }
      ]
    },
    {
      id: "listening",
      name: "Listening",
      icon: "🎧",
      description: "听力题型练习",
      types: [
        {
          id: "listen-and-choose-a-response",
          name: "Listen and Choose a Response",
          description: "内容待补充。",
          status: "empty"
        },
        {
          id: "listen-to-a-conversation",
          name: "Listen to a Conversation",
          description: "内容待补充。",
          status: "empty"
        },
        {
          id: "listen-to-an-announcement",
          name: "Listen to an Announcement",
          description: "内容待补充。",
          status: "empty"
        },
        {
          id: "listen-to-an-academic-talk",
          name: "Listen to an Academic Talk",
          description: "内容待补充。",
          status: "empty"
        }
      ]
    },
    {
      id: "speaking",
      name: "Speaking",
      icon: "🗣️",
      description: "口语题型练习",
      types: [
        {
          id: "listen-and-repeat",
          name: "Listen and Repeat",
          description: "已加入今天的 1–5 题。",
          status: "content"
        },
        {
          id: "take-an-interview",
          name: "Take an Interview",
          description: "内容待补充。",
          status: "empty"
        }
      ]
    },
    {
      id: "writing",
      name: "Writing",
      icon: "✍️",
      description: "写作题型练习",
      types: [
        {
          id: "build-a-sentence",
          name: "Build a Sentence",
          description: "内容待补充。",
          status: "empty"
        },
        {
          id: "write-an-email",
          name: "Write an Email",
          description: "内容待补充。",
          status: "empty"
        },
        {
          id: "academic-discussion",
          name: "Academic Discussion",
          description: "内容待补充。",
          status: "empty"
        }
      ]
    }
  ],
  speaking: {
    "listen-and-repeat": [
      {
        number: 1,
        title: "Gym 场景",
        lines: [
          "Cardio machines and bikes are over here.",
          "The weight room provides dumbbells and benches.",
          "Our yoga studio offers classes for all fitness levels.",
          "Locker rooms contain storage bins and changing facilities.",
          "Enjoy our smoothie bar and sample nutritious drinks and snacks.",
          "Personal trainers are available for individual guidance.",
          "Before you leave, check the gym floor plan for specific areas and equipment."
        ],
        vocab: [
          ["cardio machines", "/ˈkɑːrdioʊ məˈʃiːnz/", "有氧健身器械（如跑步机、椭圆机等）"],
          ["weight room", "/weɪt ruːm/", "力量训练区"],
          ["dumbbells", "/ˈdʌmbelz/", "哑铃"],
          ["benches", "/bentʃɪz/", "训练凳"],
          ["yoga studio", "/ˈjoʊɡə ˈstuːdioʊ/", "瑜伽教室"],
          ["fitness levels", "/ˈfɪtnəs ˈlevəlz/", "体能水平"],
          ["locker rooms", "/ˈlɑːkər ruːmz/", "更衣室，储物柜区"],
          ["storage bins", "/ˈstɔːrɪdʒ bɪnz/", "储物箱"],
          ["changing facilities", "/ˈtʃeɪndʒɪŋ fəˈsɪlətiz/", "更衣设施"],
          ["smoothie bar", "/ˈsmuːði bɑːr/", "思慕雪吧台（健康饮品区）"],
          ["sample", "/ˈsæmpəl/", "v. 品尝；尝试"],
          ["nutritious drinks and snacks", "/nuˈtrɪʃəs drɪŋks ənd snæks/", "营养饮品与小食"],
          ["personal trainers", "/ˈpɜːrsənl ˈtreɪnərz/", "私人教练"],
          ["individual guidance", "/ˌɪndɪˈvɪdʒuəl ˈɡaɪdns/", "一对一指导"],
          ["gym floor plan", "/dʒɪm flɔːr plæn/", "健身房平面图"]
        ]
      },
      {
        number: 2,
        title: "Wood Shop",
        lines: [
          "Welcome to the wood shop.",
          "This tool box contains everything you should need.",
          "You will learn to use your saw in our classes.",
          "Your screwdriver can be used with all of our carpentry machines.",
          "All wood will need to be smooth, so use the sand paper provided.",
          "Use only what is needed so that your supplies last all quarter.",
          "Before you leave the class room, be sure to put all your tools back into the tool box."
        ],
        vocab: [
          ["wood shop", "/wʊd ʃɑːp/", "木工教室，木工坊"],
          ["tool box", "/tuːl bɑːks/", "工具箱"],
          ["saw", "/sɔː/", "锯子"],
          ["screwdriver", "/ˈskruːdraɪvər/", "螺丝刀"],
          ["carpentry machines", "/ˈkɑːrpəntri məˈʃiːnz/", "木工机械"],
          ["sand paper", "/sænd ˈpeɪpər/", "砂纸"],
          ["supplies", "/səˈplaɪz/", "物料 / 耗材"],
          ["last all quarter", "/læst ɔːl ˈkwɔːrtər/", "支撑整个学期使用"]
        ]
      },
      {
        number: 3,
        title: "图书馆场景",
        lines: [
          "The computer lab has free Wi-Fi access.",
          "The reading room is a quiet space for patrons.",
          "The children's section has books and activities for kids.",
          "The reference desk can provide assistance for research projects.",
          "Study rooms can be reserved for group work and other meetings.",
          "Library staff are available for help finding resources here or at other locations.",
          "If you are looking for other specific locations and services, please use our guide."
        ],
        vocab: [
          ["free Wi-Fi access", "/friː ˈwaɪfaɪ ˈækses/", "免费无线网络接入"],
          ["reading room", "/ˈriːdɪŋ ruːm/", "阅览室"],
          ["patrons", "/ˈpeɪtrənz/", "读者（图书馆对用户的称呼）"],
          ["children's section", "/ˈtʃɪldrənz ˈsekʃn/", "儿童阅览区"],
          ["reference desk", "/ˈrefrəns desk/", "咨询台，参考咨询处"],
          ["assistance", "/əˈsɪstəns/", "帮助"],
          ["research projects", "/rɪˈsɜːrtʃ ˈprɑːdʒekts/", "研究项目"],
          ["study rooms", "/ˈstʌdi ruːmz/", "研讨室，自习室"],
          ["reserve", "/rɪˈzɜːrv/", "预约"],
          ["group work", "/ɡruːp wɜːrk/", "小组作业"],
          ["library staff", "/ˈlaɪbreri stæf/", "图书馆工作人员"],
          ["guide", "/ɡaɪd/", "导览手册，指引"]
        ]
      },
      {
        number: 4,
        title: "Campus Tour 场景",
        lines: [
          "Welcome to our campus tour.",
          "The enrollment office is straight ahead.",
          "Next door you will see the library.",
          "The cafeteria has many meal options available.",
          "The university lecture halls are located over here.",
          "If you have any questions, please stop by the information desk.",
          "Lastly, please also remember to check the event schedule at the entrance."
        ],
        vocab: [
          ["campus tour", "/ˈkæmpəs tʊr/", "校园参观"],
          ["enrollment office", "/ɪnˈroʊlmənt ˈɔːfɪs/", "招生办公室"],
          ["library", "/ˈlaɪbreri/", "图书馆"],
          ["cafeteria", "/ˌkæfəˈtɪriə/", "食堂 / 自助餐厅"],
          ["meal options", "/miːl ˈɑːpʃənz/", "餐食选择"],
          ["university lecture halls", "/ˌjuːnɪˈvɜːrsəti ˈlektʃər hɔːlz/", "大学报告厅"],
          ["information desk", "/ˌɪnfərˈmeɪʃn desk/", "咨询台"],
          ["event schedule", "/ɪˈvent ˈskedʒuːl/", "活动日程表"],
          ["at the entrance", "/æt ði ˈentrəns/", "在入口处"]
        ]
      },
      {
        number: 5,
        title: "选课操作系统场景",
        lines: [
          "Enter your name and student ID number.",
          "Browse the course catalog to choose your classes.",
          "You can use the Schedule Planner tool to avoid time conflicts.",
          "If a class is already full, a pop up message will appear.",
          "Contact the instructor to see if more seats can be added.",
          "You can still add or drop classes up until the second week of the new semester.",
          "For your records, print out a list of your classes or e-mail a copy to yourself."
        ],
        vocab: [
          ["student ID number", "/ˈstuːdnt aɪ ˈdiː ˈnʌmbər/", "学号"],
          ["course catalog", "/kɔːrs ˈkætəlɔːɡ/", "课程目录"],
          ["Schedule Planner tool", "/ˈskedʒuːl ˈplænər tuːl/", "课程表规划工具"],
          ["time conflicts", "/taɪm ˈkɑːnflɪkts/", "时间冲突"],
          ["pop up message", "/pɑːp ʌp ˈmesɪdʒ/", "弹出提示框"],
          ["instructor", "/ɪnˈstrʌktər/", "导师；教练"],
          ["add seats", "/æd siːts/", "增加名额"],
          ["add or drop classes", "/æd ɔːr drɑːp ˈklæsɪz/", "加课或退课"],
          ["new semester", "/ˈsekənd wiːk əv ðə nuː sɪˈmestər/", "新学期"],
          ["for your records", "/fɔːr jʊər ˈrekərdz/", "供你留存记录"]
        ]
      }
    ]
  }
};
