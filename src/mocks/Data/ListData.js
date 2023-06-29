const listData = [
	{
		assembleId: '1',
		title: '사이드 프로젝트 인원 구합니다.',
		contents:
			'이번 프로젝트는 제가 사이드 프로젝트를 하려고해서 구합니다. 쪼만한 프로젝트로 로그인, 회원가입, CRUD, Search이런 기능 넣을예정입니다.',
		category: '프로젝트',
		writer: 'Taegi',
		personnelNumber: '5',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '2',
		title:
			'안녕하세요. 이번에는 모던 딥다이브 스터디입니다. 모던 딥다이트가 책이 두꺼워서 혼자 읽는게 힘들어서 같이 읽으면서 리뷰하면 좋을거같아요. 열심히 잘 진행해봅시다.',
		contents: '안녕하세요. 이번에는 모던 딥다이브 스터디입니다.',
		category: '프로젝트',
		writer: '프로그래머스',
		personnelNumber: '10',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '3',
		title: 'CS지식을 공부하고싶은 비전공자 개발자 혹은 취준생 모집해요',
		contents: 'CS지식을 공부하고싶은 비전공자 개발자 혹은 취준생 모집해요',
		category: '스터디',
		writer: '인프런',
		personnelNumber: '4',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '4',
		title: '모두를 위한 서비스 어셈블 프로젝트 개발자 추가 인원구합니다.',
		contents: '어셈블 프로젝트에서 백엔드 2명, 프론트엔드 1명 추가로 구합니다.',
		category: '프로젝트',
		writer: 'hello22',
		personnelNumber: '2',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '5',
		title: '독서 스터디를 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'assembled',
		personnelNumber: '4',
		expectedPeriod: '10',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '6',
		title: '웹 프로젝트 인원 구합니다.',
		contents: '웹 프로젝트 해야할거같아요',
		category: '프로젝트',
		writer: 'park12',
		personnelNumber: '10',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '7',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'jung',
		personnelNumber: '5',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '8',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'park',
		personnelNumber: '10',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '9',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'kim99',
		personnelNumber: '3',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '10',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'taek',
		personnelNumber: '3',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '11',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'took',
		personnelNumber: '5',
		expectedPeriod: '2',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '12',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'Ipad22',
		personnelNumber: '3',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '13',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'NIKE',
		personnelNumber: '3',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '14',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: '아디다스',
		personnelNumber: '3',
		expectedPeriod: '5',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '15',
		title: '모두를 위한 서비스 어셈블 프로젝트 개발자 추가 인원구합니다.',
		contents: '어셈블 프로젝트에서 백엔드 2명, 프론트엔드 1명 추가로 구합니다.',
		category: '개발/프로그래밍',
		writer: 'hello22',
		personnelNumber: '2',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '15',
		title: '독서 스터디를 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'assembled',
		personnelNumber: '4',
		expectedPeriod: '10',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '16',
		title: '웹 프로젝트 인원 구합니다.',
		contents: '웹 프로젝트 해야할거같아요',
		category: '프로젝트',
		writer: 'park12',
		personnelNumber: '10',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '17',
		title: 'jung에서 팀원을 구해요',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'jung',
		personnelNumber: '5',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '18',
		title: 'park 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'park',
		personnelNumber: '10',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '19',
		title: '프로젝트 인원 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'kim99',
		personnelNumber: '3',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '20',
		title: '토이 프로젝트 인원 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: 'taek',
		personnelNumber: '3',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '21',
		title: '모두를 위한 서비스 어셈블 프로젝트 디자이너 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'took',
		personnelNumber: '5',
		expectedPeriod: '2',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '22',
		title: '나이키에서 프로젝트 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'Ipad22',
		personnelNumber: '3',
		expectedPeriod: '3',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '23',
		title: '아디다스 프로젝트 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '스터디',
		writer: 'NIKE',
		personnelNumber: '3',
		expectedPeriod: '1',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
	{
		assembleId: '24',
		title: '인프런에서 스터디 구합니다.',
		contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
		category: '프로젝트',
		writer: '아디다스',
		personnelNumber: '3',
		expectedPeriod: '5',
		hits: 52,
		likes: 1,
		creator: '태선컴퍼니',
		createdDate: '1982/02/07',
		commentCount: 1,
		comments: [
			{
				commentContents:
					'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
				commentCreator: '꼬꼬마 짱구친구',
				commentCreatedDate: '2023/02/11',
				userImg:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg',
			},
		],
	},
]

export default listData
