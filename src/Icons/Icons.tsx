import { CiWarning } from 'react-icons/ci'
import {
	AiOutlineMail,
	AiOutlineLock,
	AiFillCaretRight,
	AiOutlineCamera,
	AiOutlineCheckCircle,
	AiFillHeart,
	AiOutlineHeart,
	AiOutlineUndo,
	AiOutlineHome,
	AiOutlineQuestionCircle,
	AiOutlineSend,
	AiOutlinePlus,
} from 'react-icons/ai'
import {
	BsFillPersonFill,
	BsChat,
	BsPhone,
	BsCaretDownFill,
	BsTrash,
} from 'react-icons/bs'
import { BiUser, BiHappy, BiChevronsUp, BiLogOut } from 'react-icons/bi'
import { MdOutlineCancel, MdOutlineToday } from 'react-icons/md'
import { RiUser5Line, RiArrowGoBackLine } from 'react-icons/ri'

import { FaQuestion, FaPen } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { HiOutlinePlus } from 'react-icons/hi'
import { GrView } from 'react-icons/gr'

type IconSize = {
	size?: string
}

type IconRotate = {
	rotate?: number
	onClick?: React.MouseEventHandler<SVGSVGElement>
}
interface OnClickIconType {
	onClick?: React.MouseEventHandler<SVGSVGElement>
}

export const PersonIcon = ({ size }: IconSize) => (
	<BsFillPersonFill size={size} />
) // 사람

export const ChatIcon = ({ size }: IconSize) => <BsChat size={size} /> // 채팅

export const EmailIcon = () => <AiOutlineMail size={'22'} /> //이메일

export const LockIcon = () => <AiOutlineLock size={'22'} /> //자물쇠

export const NameIcon = () => <BiUser size={'22'} /> //인간

export const PhoneIcon = () => <BsPhone size={'22'} /> //핸드폰

export const DateIcon = () => <MdOutlineToday size={'22'} /> //달력
export const BigDateIcon = () => <MdOutlineToday size={'32'} /> //달력

export const NicknameIcon = () => <RiUser5Line size={'22'} /> //달력

export const WarningIcon = ({ size }: IconSize) => (
	<CiWarning size={size} color="#FB9B00" />
) //경고

export const DownIcon = () => <BsCaretDownFill size={'30'} color="#FB9B00" />
export const SmallDownIcon = () => (
	<BsCaretDownFill size={'20'} color="#a6a6a6" />
)

export const QuestionIcon = ({ size }: IconSize) => (
	<FaQuestion size={size} color="#FB9B00" />
) //경고

export const ClapIcon = () => <BiHappy size={'65'} color="#FB9B00" />

export const PaginationArrowSingleIcon = ({ rotate }: IconRotate) => (
	<AiFillCaretRight style={{ transform: `rotate(${rotate}deg)` }} />
) // 페이지네이션화살표 (>)

export const CameraIcon = () => <AiOutlineCamera size={'25'} /> // 이미지 추가

export const Check_Icon = () => (
	<AiOutlineCheckCircle size={'100'} color="#FB9B00" />
) //체크 버튼
export const PenIcon = () => <FaPen size={'17'} color="#777" /> //펜모양

export const TrashIcon = () => <BsTrash size={'17'} color="#777" /> //쓰레기통 버튼

export const NotFillHeartIcon = ({ onClick }: OnClickIconType) => (
	<AiOutlineHeart size={'23'} onClick={onClick} color={'#f60004'} />
) // 빈 하트
export const FillHeartIcon = ({ onClick }: OnClickIconType) => (
	<AiFillHeart size={'23'} onClick={onClick} color={'#f60004'} />
) // 찬 하트
export const HamburgerIcon = ({ onClick }: OnClickIconType) => (
	<GiHamburgerMenu size={'23'} onClick={onClick} color="#FB9B00" />
) // 햄버거
export const CancelIcon = () => <MdOutlineCancel size={'17'} color="#777" /> //취소 버튼
export const CancelbigIcon = ({ onClick }: OnClickIconType) => (
	<RxCross2
		size={'35'}
		color="#FB9B00"
		onClick={onClick}
		style={{ cursor: 'Pointer' }}
	/>
) //취소 버튼
export const CancelBlackIcon = ({ onClick }: OnClickIconType) => (
	<RxCross2 size={'30'} onClick={onClick} />
) //취소 버튼

export const BigPlusIcon = ({ onClick }: OnClickIconType) => (
	<HiOutlinePlus size={'40'} color="#FB9B00" onClick={onClick} />
)

export const UpIcon = () => <BiChevronsUp size={'40'} color="#FDD19B" />
//Up

export const ViewIcon = () => <GrView size={'15'} />

export const RefetchIcon = () => <AiOutlineUndo size={'23'} />

export const HomeIcon = ({ onClick }: OnClickIconType) => (
	<AiOutlineHome size={'23'} onClick={onClick} />
)
export const ArrowIcon = ({ rotate, onClick }: IconRotate) => (
	<IoIosArrowForward
		size={'23'}
		onClick={onClick}
		style={{ transform: `rotate(${rotate}deg)`, cursor: 'Pointer' }}
	/>
)
export const LogOutIcon = ({ onClick }: OnClickIconType) => (
	<BiLogOut size={'23'} onClick={onClick} />
)
export const UserQuestionIcon = () => (
	<AiOutlineQuestionCircle
		size={'21'}
		style={{ marginLeft: '1rem' }}
		color="#FB9B00"
	/>
)
export const BackIcon = () => <RiArrowGoBackLine size={'20'} />
export const SendIcon = () => (
	<AiOutlineSend size={'25'} style={{ cursor: 'Pointer' }} />
)
export const PlusIcon = () => (
	<AiOutlinePlus size={'25'} style={{ cursor: 'Pointer' }} />
)
