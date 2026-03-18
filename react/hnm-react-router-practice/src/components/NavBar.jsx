import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <nav className="w-full font-sans">
      {/* 1. 로그인 버튼 영역: 우측 상단 정렬 */}
      <div className="flex justify-end p-5">
        <button className="flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faUser} />
          <span className="ml-0.5">로그인</span>
        </button>
      </div>

      {/* 2. 로고 영역: 중앙 정렬 */}
      <div className="flex justify-center mb-5">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png"
          alt="H&M Logo"
        />
      </div>

      {/* 3. 메뉴 및 검색 영역: flex-1을 이용해 메뉴 리스트를 중앙에 고정 */}
      <div className="flex items-center w-full px-[15px]">
        {/* 왼쪽: 오른쪽 검색창 영역과 대칭을 이루어 메뉴를 중앙으로 밀어주는 빈 공간 */}
        <div className="flex-1"></div>

        {/* 중앙: 메뉴 리스트 */}
        <ul className="flex list-none p-0 m-0 flex-none gap-3">
          {menuList.map((menu, index) => (
            <li
              key={index}
              className="px-3 py-2 font-bold text-[15px] cursor-pointer whitespace-nowrap hover:text-gray-500"
            >
              {menu}
            </li>
          ))}
        </ul>

        {/* 오른쪽: 검색창 (flex-1 내부에서 우측 정렬) */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center border-b border-black pb-1">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="제품 검색"
              className="ml-2 w-[150px] text-sm border-none outline-none bg-transparent placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
