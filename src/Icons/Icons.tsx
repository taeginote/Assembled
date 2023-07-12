import { CiSearch, CiWarning } from 'react-icons/ci'
import {
	AiOutlineMail,
	AiOutlineLock,
	AiFillBank,
	AiFillCaretRight,
	AiOutlineCamera,
	AiOutlineCheckCircle,
} from 'react-icons/ai'
import {
	BsFillPersonFill,
	BsChat,
	BsPhone,
	BsCaretDownFill,
	BsFileEarmarkPerson,
} from 'react-icons/bs'
import { BiUser, BiHappy } from 'react-icons/bi'
import { MdOutlineToday } from 'react-icons/md'
import { RiUser5Line, RiComputerLine } from 'react-icons/ri'
import { FiBook } from 'react-icons/fi'
import { FaQuestion } from 'react-icons/fa'
import { IoIosAirplane } from 'react-icons/io'

type IconSize = {
	size?: string
}

type IconRotate = {
	rotate?: number
}
export const Person_Icon = ({ size }: IconSize) => (
	<BsFillPersonFill size={size} />
) // 사람

export const Chat_Icon = ({ size }: IconSize) => <BsChat size={size} /> // 채팅

export const Email_Icon = ({ size }: IconSize) => <AiOutlineMail size={size} /> //이메일

export const Lock_Icon = ({ size }: IconSize) => <AiOutlineLock size={size} /> //자물쇠

export const Name_Icon = ({ size }: IconSize) => <BiUser size={size} /> //인간

export const Phone_Icon = ({ size }: IconSize) => <BsPhone size={size} /> //핸드폰

export const Date_Icon = ({ size }: IconSize) => <MdOutlineToday size={size} /> //달력

export const Nickname_Icon = ({ size }: IconSize) => <RiUser5Line size={size} /> //달력

export const Warning_Icon = ({ size }: IconSize) => (
	<CiWarning size={size} color="#FB9B00" />
) //경고

export const Down_Icon = () => <BsCaretDownFill size={'30'} color="#FB9B00" />

export const Computer_Icon = () => <RiComputerLine size={'30'} /> //컴퓨터

export const Book_Icon = () => <FiBook size={'30'} /> //독서

export const People_Icon = () => <BsFileEarmarkPerson size={'30'} /> //면접

export const Club_Icon = () => <AiFillBank size={'30'} /> //동아리

export const Travel_Icon = () => <IoIosAirplane size={'30'} /> //여행

export const Question_Icon = ({ size }: IconSize) => (
	<FaQuestion size={size} color="#FB9B00" />
) //경고

export const Clap_Icon = () => <BiHappy size={'65'} color="#FB9B00" />

export const PaginationArrowSingle_Icon = ({ rotate }: IconRotate) => (
	<AiFillCaretRight style={{ transform: `rotate(${rotate}deg)` }} />
) // 페이지네이션화살표 (>)

export const Camera_Icon = () => <AiOutlineCamera size={'25'} /> // 이미지 추가

export const Check_Icon = () => (
	<AiOutlineCheckCircle size={'100'} color="#FB9B00" />
) //체크 버튼
