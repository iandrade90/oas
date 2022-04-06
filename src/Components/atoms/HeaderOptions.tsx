const HeaderOptions = ({ options }: any) => {
  return (
    <nav className="header-option-container">
      <ul className="header-ul">
        {options.map((option: any) => {
          return (
            <li className="header-container-item" key={option.id}>
              {option.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderOptions;
