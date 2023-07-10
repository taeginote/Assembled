import { listDataType } from '../../Types/dataType'
import CurrentTime from '../../Utils/CurrentTime'

let listData: listDataType = {
	success: true,
	status: 200,
	response: [],
}
for (let i = 0; i < 10; i++) {
	listData.response.push(
		{
			postId: i,
			title: '인프런에서 스터디 구합니다.',
			contents: '어셈블 프로젝트에서 디자이너 1명 구합니다.',
			category: 'project',
			writer: '아디다스',
			writeDate: CurrentTime(),
			postStatus: '모집중',
			hits: '5',
			likes: '3',
			personnelNumber: 5,
			expectedPeriod: '3',
			profile: {
				fileFullPath:
					'https://i.pinimg.com/550x/ec/11/a2/ec11a24bf2a02078962b9f32f71d8c49.jpg', // 예시) D://project/file
				originalName: '파일 이름',
			},
			commentCount: 1,
			comments: [
				{
					commentContents:
						'대면하시는 지역이 궁금합니다. 혹시 오픈 채팅방이 있을까요? 질문이있습니다.',
					commentCreator: '꼬꼬마 동그리',
					commentCreatedDate: CurrentTime(),
					userProfile: {
						fileFullPath:
							'https://item.kakaocdn.net/do/4541d21d270056444e826e2996f30e688f324a0b9c48f77dbce3a43bd11ce785', // 예시) D://project/file
						originalName: '파일 이름',
					},
				},
			],
		},
		{
			postId: (i + 1) * 100,
			title: '사이드프로젝트 같이 할 인원구합니다.',
			contents: '우아한테크코스 지원할 예정인데 백3 프2로 진행할 예정입니다.',
			category: 'project',
			writer: '우아한테크코스',
			writeDate: CurrentTime(),
			postStatus: '모집중',
			hits: '50',
			likes: '10',
			personnelNumber: 5,
			expectedPeriod: '5',
			profile: {
				fileFullPath:
					'https://www.thefirstmedia.net/news/photo/202004/56618_38939_2423.png', // 예시) D://project/file
				originalName: '파일 이름',
			},
			commentCount: 1,
			comments: [
				{
					commentContents: '오~오? 저 할래요',
					commentCreator: '오오 짱구',
					commentCreatedDate: CurrentTime(),
					userProfile: {
						fileFullPath:
							'https://static.wikia.nocookie.net/shinchan/images/d/d8/Shinnoske.jpg/revision/latest/scale-to-width-down/250?cb=20131020030755&path-prefix=ko', // 예시) D://project/file
						originalName: '파일 이름',
					},
				},
			],
		},
		{
			postId: (i + 1) * 1000,
			title: '이번에 독서 스터디 같이하고싶은사람 (주 3회)',
			contents:
				'안녕하세요. 독서스터디 조장 신짱구 입니다. 이번 독서동아리는 1년동안 진행중에 있는 안정적인 동아리입니다. 주 2회 대면하고 1회 비대면으로 진행합니다. 가능하신분은 오픈톡으로 연락주시거나 댓글로 편하게 주세요',
			category: 'study',
			writer: '다읽어',
			writeDate: CurrentTime(),
			postStatus: '모집중',
			hits: '4',
			likes: '20',
			personnelNumber: 10,
			expectedPeriod: '0',
			profile: {
				fileFullPath:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiQdhWxfSe3uKwTyX4EK_JPrS7wppr6p6FA&usqp=CAU', // 예시) D://project/file
				originalName: '파일 이름',
			},
			commentCount: 1,
			comments: [
				{
					commentContents: '오~오? 저 할래요 무슨 장르에 책을 읽는 스터디죠?',
					commentCreator: '오오 짱구',
					commentCreatedDate: CurrentTime(),
					userProfile: {
						fileFullPath:
							'https://static.wikia.nocookie.net/shinchan/images/d/d8/Shinnoske.jpg/revision/latest/scale-to-width-down/250?cb=20131020030755&path-prefix=ko', // 예시) D://project/file
						originalName: '파일 이름',
					},
				},
			],
		},
	)
}

export default listData
