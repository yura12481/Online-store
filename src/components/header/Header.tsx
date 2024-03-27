import { FC, useRef, useState } from 'react';

import DropDownMenu from '@components/header/dropDownMenu/DropDownMenu';
import DropDownSearch from '@components/header/dropDownSearch/DropDownSearch';
import Button from '@components/button/Button';
import IconButton from '@components/iconButton/IconButton';
import Search from '@components/icons/Search';
import UserCircle from '@components/icons/UserCircle';
import HeartOpacity from '@components/icons/HeartOpacity';
import ShoppingBag from '@components/icons/ShoppingBag';
import Container from '@components/container/Container';

import { restrictNumberToString } from '@utils/NumberString/restrictNumberToString';

import styles from '@components/header/Header.module.scss';

const Header: FC = () => {
  const [isVisibleSearch, setVisibleSearch] = useState<boolean>(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const favoriteCount = 999;
  const cartCount = 15;

  return (
    <Container>
      <header className={styles['header']}>
        <div className={styles['logo']}>
          <h5 className="regular">Logo</h5>
        </div>
        <div className={styles['link-group']}>
          <DropDownMenu />
          <Button
            className="link-gray small"
            type="button"
            text="About us"
            href="/aboutUs"
          />
          <Button
            className="link-gray small"
            type="button"
            text="Support"
            href="/support"
          />
        </div>
        <div className={styles['icons']}>
          <IconButton
            ref={toggleButtonRef}
            type="button"
            className="link-gray large"
            icon={<Search size="medium" />}
            onClick={() =>
              isVisibleSearch ? setVisibleSearch(false) : setVisibleSearch(true)
            }
          />
          <IconButton
            type="button"
            className="link-gray large"
            icon={<UserCircle size="medium" />}
          />
          <div className={styles['icon-container']}>
            <IconButton
              type="button"
              className="link-gray large"
              icon={<HeartOpacity size="medium" />}
            />
            {favoriteCount > 0 && (
              <span className={styles['count']}>
                {restrictNumberToString(favoriteCount)}
              </span>
            )}
          </div>
          <div className={styles['icon-container']}>
            <IconButton
              type="button"
              className="link-gray large"
              icon={<ShoppingBag size="medium" />}
            />
            {cartCount > 0 && (
              <span className={styles['count']}>
                {restrictNumberToString(cartCount)}
              </span>
            )}
          </div>
        </div>
        {isVisibleSearch && (
          <DropDownSearch
            onClick={() => setVisibleSearch(false)}
            isVisible={isVisibleSearch}
            toggleRef={toggleButtonRef}
          />
        )}
      </header>
    </Container>
  );
};

export default Header;
