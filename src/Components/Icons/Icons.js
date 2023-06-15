import { CiSearch } from 'react-icons/ci'
import { AiOutlineClose, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsFillPersonFill, BsChat } from 'react-icons/bs'
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
