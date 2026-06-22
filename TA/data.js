const bank = {
  unit1: {
    lesson1: [
      {
        type:"radio",
        name:"q1",
        title:"What is 'apple' in Vietnamese?",
        answers:[
          {text:"Táo",value:"A"},
          {text:"Cam",value:"B"},
          {text:"Chuối",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q2",
        title:"Translate: Hello = ?",
        correct:"xin chao"
      },
      {
        type:"radio",
        name:"q3",
        title:"What color is the sky?",
        answers:[
          {text:"Blue",value:"A"},
          {text:"Red",value:"B"},
          {text:"Green",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q4",
        title:"Translate: Dog = ?",
        correct:"cho"
      },
      {
        type:"radio",
        name:"q5",
        title:"What is 'book'?",
        answers:[
          {text:"Sách",value:"A"},
          {text:"Bút",value:"B"},
          {text:"Bàn",value:"C"}
        ],
        correct:"A"
      },
	  {
		type:"audio",
		audio:"https://img.loigiaihay.com/picture/2021/1111/america1636626267.mp3",
		name:"q6",
		title:"Listen and choose the correct word",
		answers:[
		{text:"America",value:"A"},
		{text:"Australia",value:"B"},
		{text:"Canada",value:"C"}
		],
		correct:"A"
	  },
	  {
		type:"audio-input",

			audio:"https://img.loigiaihay.com/picture/2021/1111/america1636626267.mp3",

		id:"q7",

		title:"Listen and type the word",

		correct:"america"
	  }
    ],

    lesson2: [
      {
        type:"input",
        id:"q1",
        title:"Translate: School = ?",
        correct:"truong hoc"
      },
      {
        type:"radio",
        name:"q2",
        title:"What is 'cat'?",
        answers:[
          {text:"Mèo",value:"A"},
          {text:"Chó",value:"B"},
          {text:"Gà",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q3",
        title:"Translate: Water = ?",
        correct:"nuoc"
      },
      {
        type:"radio",
        name:"q4",
        title:"What is 'pen'?",
        answers:[
          {text:"Bút",value:"A"},
          {text:"Sách",value:"B"},
          {text:"Bàn",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q5",
        title:"Translate: House = ?",
        correct:"nha"
      }
    ],

    lesson3: [
      {
        type:"radio",
        name:"q1",
        title:"What is 'red'?",
        answers:[
          {text:"Đỏ",value:"A"},
          {text:"Xanh",value:"B"},
          {text:"Vàng",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q2",
        title:"Translate: Car = ?",
        correct:"xe hoi"
      },
      {
        type:"radio",
        name:"q3",
        title:"What is 'sun'?",
        answers:[
          {text:"Mặt trời",value:"A"},
          {text:"Mặt trăng",value:"B"},
          {text:"Sao",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q4",
        title:"Translate: Milk = ?",
        correct:"sua"
      },
      {
        type:"radio",
        name:"q5",
        title:"What is 'water'?",
        answers:[
          {text:"Nước",value:"A"},
          {text:"Lửa",value:"B"},
          {text:"Đất",value:"C"}
        ],
        correct:"A"
      }
    ]
  },

  unit2: {
    lesson1: [
      {
        type:"input",
        id:"q1",
        title:"Translate: Teacher = ?",
        correct:"giao vien"
      },
      {
        type:"radio",
        name:"q2",
        title:"What is 'student'?",
        answers:[
          {text:"Học sinh",value:"A"},
          {text:"Giáo viên",value:"B"},
          {text:"Bác sĩ",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q3",
        title:"Translate: Chair = ?",
        correct:"ghe"
      },
      {
        type:"radio",
        name:"q4",
        title:"What is 'table'?",
        answers:[
          {text:"Bàn",value:"A"},
          {text:"Ghế",value:"B"},
          {text:"Tủ",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q5",
        title:"Translate: Door = ?",
        correct:"cua"
      }
    ],

    lesson2: [
      {
        type:"radio",
        name:"q1",
        title:"What is 'book'?",
        answers:[
          {text:"Sách",value:"A"},
          {text:"Bút",value:"B"},
          {text:"Bàn",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q2",
        title:"Translate: Window = ?",
        correct:"cua so"
      },
      {
        type:"radio",
        name:"q3",
        title:"What is 'bag'?",
        answers:[
          {text:"Cặp",value:"A"},
          {text:"Bàn",value:"B"},
          {text:"Ghế",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q4",
        title:"Translate: Phone = ?",
        correct:"dien thoai"
      },
      {
        type:"radio",
        name:"q5",
        title:"What is 'computer'?",
        answers:[
          {text:"Máy tính",value:"A"},
          {text:"Điện thoại",value:"B"},
          {text:"Tivi",value:"C"}
        ],
        correct:"A"
      }
    ],

    lesson3: [
      {
        type:"input",
        id:"q1",
        title:"Translate: Friend = ?",
        correct:"ban be"
      },
      {
        type:"radio",
        name:"q2",
        title:"What is 'family'?",
        answers:[
          {text:"Gia đình",value:"A"},
          {text:"Bạn bè",value:"B"},
          {text:"Trường",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q3",
        title:"Translate: Food = ?",
        correct:"thuc an"
      },
      {
        type:"radio",
        name:"q4",
        title:"What is 'drink'?",
        answers:[
          {text:"Uống",value:"A"},
          {text:"Ăn",value:"B"},
          {text:"Ngủ",value:"C"}
        ],
        correct:"A"
      },
      {
        type:"input",
        id:"q5",
        title:"Translate: Love = ?",
        correct:"yeu"
      }
    ]
  }
 }; 