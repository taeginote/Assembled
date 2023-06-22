import { CiSearch, CiWarning } from 'react-icons/ci'
import {
	AiOutlineClose,
	AiOutlineHeart,
	AiFillHeart,
	AiOutlineMail,
	AiOutlineLock,
	AiFillBank,
} from 'react-icons/ai'
import {
	BsFillPersonFill,
	BsChat,
	BsPhone,
	BsCaretDownFill,
	BsFileEarmarkPerson,
} from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { MdOutlineToday } from 'react-icons/md'
import { RiUser5Line, RiComputerLine } from 'react-icons/ri'

import { FiBook } from 'react-icons/fi'
import { IoIosAirplane } from 'react-icons/io'

export const Search_Icon = ({ color, position }) => (
	<CiSearch color={color} position={position} />
) // 검색

export const ModalClose_icon = ({ size, onClick }) => (
	<AiOutlineClose size={size} onClick={onClick} />
) // 모달 닫기

export const FillHeart_Icon = ({ size, onClick }) => (
	<AiFillHeart size={size ? size : 50} onClick={onClick} />
) // 찬 하트

export const NotFillHeart_Icon = ({ size, onClick }) => (
	<AiOutlineHeart size={size ? size : 50} onClick={onClick} />
) // 빈 하트

export const Person_Icon = ({ size }) => <BsFillPersonFill size={size} /> // 사람

export const Chat_Icon = ({ size }) => <BsChat size={size} /> // 채팅

export const Email_Icon = ({ size }) => <AiOutlineMail size={size} /> //이메일

export const Lock_Icon = ({ size }) => <AiOutlineLock size={size} /> //자물쇠

export const Name_Icon = ({ size }) => <BiUser size={size} /> //인간

export const Phone_Icon = ({ size }) => <BsPhone size={size} /> //핸드폰

export const Date_Icon = ({ size }) => <MdOutlineToday size={size} /> //달력

export const Nickname_Icon = ({ size }) => <RiUser5Line size={size} /> //달력

export const Warning_Icon = ({ size }) => (
	<CiWarning size={size} color="#FB9B00" />
) //경고

export const Down_Icon = ({ size }) => (
	<BsCaretDownFill size={size} color="#FB9B00" />
)

export const Computer_Icon = () => <RiComputerLine size={'30'} /> //컴퓨터

export const Book_Icon = () => <FiBook size={'30'} /> //독서

export const People_Icon = () => <BsFileEarmarkPerson size={'30'} /> //면접

export const Club_Icon = () => <AiFillBank size={'30'} /> //동아리

export const Travel_Icon = () => <IoIosAirplane size={'30'} /> //여행
