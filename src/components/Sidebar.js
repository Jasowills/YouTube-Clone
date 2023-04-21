import React from 'react';
import myImage from "/public/images/1675771472798.png"
const Sidebar = () => {
  return (
    <div>
    <div className="header">
        <div className="logo-container">
          <svg width="24" height="24">
  <path fill="white" d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" class="style-scope yt-icon"></path>
</svg>
&nbsp;
&nbsp;
&nbsp;
          <div className="logo">
           
            <svg viewBox="0 0 90 20" className="style-scope yt-icon" style={{ width: '90px' }}>
              <g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon">
            <g class="style-scope yt-icon">
                <path
                    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                    fill="#FF0000" class="style-scope yt-icon"></path>
                <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" class="style-scope yt-icon">
                </path>
            </g>
            <g class="style-scope yt-icon">
                <g id="youtube-paths" class="style-scope yt-icon">
                    <path
                                            fill='#fff'

                        d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                        class="style-scope yt-icon"></path>
                    <path
                                            fill='#fff'

                        d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                        class="style-scope yt-icon"></path>
                    <path
                                            fill='#fff'

                        d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                        class="style-scope yt-icon"></path>
                    <path
                                          fill='#fff'
  d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                        class="style-scope yt-icon"></path>
                    <path
                                            fill='#fff'

                        d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                        class="style-scope yt-icon"></path>
                    <path
                                            fill='#fff'

                        d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
                        class="style-scope yt-icon"></path>
                    <path
                      fill='#fff'
                        d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
                        class="style-scope yt-icon"></path>
                </g>
            </g>
        </g>
    </svg>

            </div>
        </div>
        <div className="search-container">
            <form action="">
                <input type="text" placeholder="Search"/>
            </form>
            <button className="search"><svg viewBox="0 0 24 24" width="25"><path fill='#fff' d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" class="style-scope yt-icon"></path></svg></button>
            <button className="mic"><svg viewBox='0 0 24 24' width="25"><path fill='#fff' d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z" class="style-scope yt-icon"></path></svg></button>

        </div>
        <div className="profile-container">
           <svg viewBox='0 0 24 24' width="24"><path fill='#fff' d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" class="style-scope yt-icon"></path></svg>
           <svg viewBox='0 0 24 24' width="24"><path fill='#fff' d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></svg>
         
          <div className="profile-box">
            <img src='https://yt3.ggpht.com/ytc/AGIKgqNPv3IlBYGj6ReWL9xBALmvgc44rUiY0CVsBCKIHblyHX5Jiiv_5AFOO_DlJjmc=s88-c-k-c0x00ffffff-no-rj-mo'></img>
          </div>
        </div>
      </div>
        <div class="body-container">
    <div className="sidebar">
      <div className="sidebar-items">

        <a className="sidebar-item active"><svg viewBox="0 0 24 24" width="24"> <path d="M4,10V21h6V15h4v6h6V10L12,3Z" fill="#fff"/>
</svg> Home</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" fill="#fff"/>
</svg>
Shorts</a>
        <a className="sidebar-item"> <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
  <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
</svg>
Subscription</a>
        <hr />
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path d="M11,7l6,3.5L11,14V7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" fill="#fff"/>
</svg> Library</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon" fill="#fff"></path>
</svg>

History</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" fill='#fff'></path>
</svg>
Your Videos</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path fill='#fff' d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2z"/>
</svg>
Watch Later</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path fill='#fff' d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"/>
</svg>
Like Videos</a>
        <hr/>
        <h4 className="more">Explore</h4>
        <a className="sidebar-item">
                    <svg viewBox="0 0 24 24" width="24">

<path fill='#fff' d="M14.72,17.84c-0.32,0.27-0.83,0.53-1.23,0.66c-1.34,0.33-2.41-0.34-2.62-0.46c-0.21-0.11-0.78-0.38-0.78-0.38 s0.35-0.11,0.41-0.13c1.34-0.54,1.89-1.24,2.09-2.11c0.2-0.84-0.16-1.56-0.31-2.39c-0.12-0.69-0.11-1.28,0.12-1.9 c0.02-0.05,0.12-0.43,0.12-0.43s0.11,0.35,0.13,0.41c0.71,1.51,2.72,2.18,3.07,3.84c0.03,0.15,0.05,0.3,0.05,0.46 C15.8,16.3,15.4,17.26,14.72,17.84z M12.4,4.34c-0.12,0.08-0.22,0.15-0.31,0.22c-2.99,2.31-2.91,5.93-2.31,8.55l0.01,0.03l0.01,0.03 c0.06,0.35-0.05,0.7-0.28,0.96c-0.24,0.26-0.58,0.41-0.95,0.41c-0.44,0-0.85-0.2-1.22-0.6c-0.67-0.73-1.17-1.57-1.5-2.46 c-0.36,0.77-0.75,1.98-0.67,3.19c0.04,0.51,0.12,1,0.25,1.43c0.18,0.6,0.43,1.16,0.75,1.65c1.05,1.66,2.88,2.82,4.78,3.05 c0.42,0.05,0.85,0.08,1.26,0.08c1.34,0,3.25-0.27,4.74-1.57c1.77-1.56,2.35-3.99,1.44-6.06c-0.04-0.1-0.06-0.14-0.09-0.19 l-0.04-0.08c-0.21-0.42-0.47-0.81-0.75-1.14c-0.24-0.3-0.48-0.56-0.79-0.83c-0.3-0.27-0.64-0.51-1-0.77 c-0.46-0.33-0.93-0.67-1.38-1.09C12.98,7.83,12.3,6.11,12.4,4.34 M14.41,2c0,0-0.2,0.2-0.56,0.99c-0.66,1.92-0.15,3.95,1.34,5.39 c0.73,0.69,1.61,1.17,2.36,1.84c0.32,0.29,0.62,0.59,0.89,0.93c0.36,0.42,0.66,0.89,0.91,1.38c0.05,0.1,0.1,0.2,0.14,0.3 c1.12,2.55,0.36,5.47-1.73,7.31C16.23,21.47,14.22,22,12.22,22c-0.47,0-0.95-0.03-1.41-0.09c-2.29-0.28-4.42-1.66-5.63-3.57 c-0.39-0.6-0.68-1.26-0.88-1.93c-0.16-0.54-0.25-1.1-0.29-1.67c-0.12-1.88,0.67-3.63,1.08-4.31c0.41-0.69,1.55-2.18,1.55-2.18 s0,0.03-0.01,0.09C6.41,10.11,7,11.88,8.22,13.22c0.15,0.17,0.27,0.22,0.34,0.22c0.06,0,0.09-0.04,0.08-0.09 C7.79,9.59,8.37,6,11.35,3.7c0.59-0.46,1.51-0.94,1.98-1.18C13.8,2.28,14.41,2,14.41,2L14.41,2z" class="style-scope yt-icon"></path></svg>

Trending</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
 <path fill='#fff' d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z M9,19c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S10.66,19,9,19z M18,7h-5V5h5V7z" class="style-scope yt-icon"></path>
</svg>Music</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24" class="style-scope yt-icon">
  <path fill='#fff' d="M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M17,12.5c0-0.83-0.67-1.5-1.5-1.5S14,11.67,14,12.5c0,0.83,0.67,1.5,1.5,1.5 S17,13.33,17,12.5z M20,9.5C20,8.67,19.33,8,18.5,8S17,8.67,17,9.5c0,0.83,0.67,1.5,1.5,1.5S20,10.33,20,9.5z M16.97,5.15l-4.5,2.53 l-0.49,0.27l-0.49-0.27l-4.5-2.53L3,7.39v6.43l8.98,5.04l8.98-5.04V7.39L16.97,5.15 M16.97,4l4.99,2.8v7.6L11.98,20L2,14.4V6.8 L6.99,4l4.99,2.8L16.97,4L16.97,4z" class="style-scope yt-icon"></path>
</svg>
Gaming</a>
        <a className="sidebar-item">
          <svg viewBox="0 0 24 24" width="24">
<path fill='#fff' d="M11,11v6H7v-6H11 M12,10H6v8h6V10L12,10z M3,3.03V21h14l4-4V3.03 M20,4v11.99L19.99,16H16v3.99L15.99,20H4V4H20z M18,8H6V6 h12V8z M18,15h-5v-2h5V15z M18,12h-5v-2h5V12z" class="style-scope yt-icon"></path></svg>          News</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
<path fill='#fff' d="M17 3V5V6V10V10.51L16.99 10.97C16.94 13.1 15.66 14.94 13.74 15.67H13.72L13.66 15.69L13 15.95V16.65V19V20H14V21H15H10V20H11V19V16.65V15.95L10.34 15.71L10.26 15.68H10.25C8.33 14.95 7.05 13.11 7 10.98V10.51V10V6V5V3H17ZM18 2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18V2ZM18 10V6H19V10H18ZM5 10V6H6V10H5Z" class="style-scope yt-icon"></path></svg>
Sport</a>
        <hr />
                <h4 className="more">More from YouTube</h4>

        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24" preserveAspectRatio="xMidYMid meet">
  <path fill="#F00" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"/>
  <path fill="#FFF" d="M9.68 8.9v6.18l5.84-3.1"/>
  <path fill="#000" fill-opacity=".12" d="M9.68 8.88l5.13 3.48.73-.38"/>
</svg>


YouTube Premium</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path fill="red" d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"/>
  <path fill="#fff" d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"/>
  <path fill="red" d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"/>
  <path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"/>
</svg>YouTube Studio</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24" class="style-scope yt-icon">
  <g class="style-scope yt-icon">
    <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
    <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12"></polygon>
    <path fill="#FFFFFF" d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z"></path>
  </g>
</svg>
YouTube Music</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
          <path fill="#FF0000" d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z" class="style-scope yt-icon"></path>
          <path fill="#000" d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z" class="style-scope yt-icon"></path>
        <path fill="#000" d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z" class="style-scope yt-icon"></path>
        <path fill="#FFF" d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z" class="style-scope yt-icon"></path>
        </svg>
          YouTube Kids</a>
        <hr/>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path fill='' stroke='#fff' d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51l-0.55,2.2h-2.44l-0.55-2.2l-0.13-0.51l-0.5-0.18c-0.53-0.43-1.11-0.76-1.72-0.98l-0.4-0.32l-0.5,0.14l-2.17,0.62l-1.22-2.11l1.63-1.59l0.37-0.36l-0.08-0.51c-0.05-0.32-0.08-0.64-0.08-0.98s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36l-1.63-1.59l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32c0.53-0.43,1.11-0.76,1.72-0.98l0.5-0.18l0.13-0.51l0.55-2.2h2.44L13.22,3z"/>
        </svg>
Settings</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24"  class="style-scope yt-icon">
  <path fill='#fff' d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3z" class="style-scope yt-icon"></path>
</svg>
Report History</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path fill='#fff' d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"/>
</svg>
Help</a>
        <a className="sidebar-item"><svg viewBox="0 0 24 24" width="24">
  <path fill='#fff' d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z" />
</svg>
Send Feedback</a>
        <hr />
        <div className='wrap'>
          <p className='small'>About</p> 
          &nbsp;
          <p className='small'>Press</p>
                    &nbsp;

          <p className='small'>Copyright</p>
                    &nbsp;

          <p className='small'>Contact us</p>
                    &nbsp;

        <p className='small'>Creator</p>

          &nbsp;

      
         <p className='small'>Advertise</p>
                   &nbsp;

         <p className='small'>Developers</p>
                   &nbsp;

        </div>
      <div className='wrap'>
            <p className='small'>Terms</p> 
        <p className='small'>Privacy</p>
        <p className='small'>Policy & Safety</p>
        <p className='small'>How YouTube Works</p>
        <p className='small'>Test new features</p>
       
        </div>
      </div>
        </div>
          <div class="content">
            <div class="chips-wrapper">
                <div class="chip b">
                    <p>All</p>
                </div>
                <div class="chip">
                    <p>CSS</p>
                </div>
                <div class="chip">
                    <p>HTML</p>
                </div>
                <div class="chip">
                    <p>User interface design</p>
                </div>
                <div class="chip">
                    <p>FIFA 23</p>
                </div>
                <div class="chip">
                    <p>Chelsea F.c</p>
                </div>
                <div class="chip">
                    <p>Uefa Champions League</p>
                </div>
                <div class="chip">
                    <p>Backstreet Boys</p>
                </div>
                <div class="chip">
                    <p>Javascript</p>
            </div>
            <div class="chip">
                    <p>NEXT.js</p>
                </div><div class="chip">
                    <p>Cristiano Ronaldo</p>
                </div><div class="chip">
                    <p>Lionel Messi</p>
                </div>
            </div>
            <div class="video-container">
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/AsTagX5tG4E" class="video-box">
<img src="https://i.ytimg.com/vi/AsTagX5tG4E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDOXxnG18cQOB2bf9IUdyj372xTw"/>
                              </a>
                        <div class="video-details">
                  <div class="channel-logo">
                    <img src='https://yt3.googleusercontent.com/ytc/AGIKgqMl9TL4OpwS8Zc5jHrNnfO01f_Wbovye9mQzfp36Q=s176-c-k-c0x00ffffff-no-rj'/>
                            </div>
                            <div class="detail">
                                <h3 class="title">How to start a coding YouTube channel (with tips from a bunch of successful creators!)</h3>
                                <div class="channel-name">freecodecamp.org</div>
                                <div class="views-upload">
                                    <div class="views">181K views .</div>
                                    <div class="upload">3 years ago</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/BLIGI5PXkus" class="video-box">
                            <img src='https://i.ytimg.com/vi/BLIGI5PXkus/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsPr44JcttEj_zGpXGf_UmJi-hAw' alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/1sL3o7HlNEOn4jV74w7WN-p7ABIbBop9c09QcwKTGcapN3eMvGt-tCDYoA3ErYbtVCHcpVtlcgM=s48-c-k-c0x00ffffff-no-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">Chelsea v Real Madrid (0-2) | 2nd Leg Highlights | Champions League</h3>
                                <div class="channel-name">Chelsea Football Club</div>
                                <div class="views-upload">
                                    <div class="views">35K views .</div>
                                    <div class="upload">12 hours ago</div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/fhsj1keVObs" class="video-box">
                            <img src="https://i.ytimg.com/vi/fhsj1keVObs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmmv-OJTNQbwQCtV-KiW2J6fz58A" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/SYe4TpX0ygqZQD2sxvQuh4kEOGrX_FsjU72hAu_pVe0OsXAkjYP0xUHOP18wYJNZ1owLEAaIvg=s176-c-k-c0x00ffffff-no-rj-mo" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">Complete responsive website design</h3>
                                <div class="channel-name">iMe Creative</div>
                                <div class="views-upload">
                                    <div class="views">281K views .</div>
                                    <div class="upload">1 year ago</div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/YVI8-Lvg9xk" class="video-box">
                            <img src="https://i.ytimg.com/vi/YVI8-Lvg9xk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDRxOYy1MGpFUUGBSt0Bet-C1ksg" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/mPP8Xb0UxB4SEN-c_doo9J7LqQ8hAov0THHnXY7nvrGxpHkkakqIFctfcGqDHjsrcws624Tl=s48-c-k-c0x00ffffff-no-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">Introduction to HTML | HTML Crash Course</h3>
                                <div class="channel-name">CodeWithJace</div>
                                <div class="views-upload">
                                    <div class="views">281M views .</div>
                                    <div class="upload">1 year ago</div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/_K06Dni-RE4" class="video-box">
                            <img src="https://i.ytimg.com/vi/_K06Dni-RE4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChlrLPfXDM84dQGNBL4VPJCYS3tg" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.googleusercontent.com/t0I81InjkYw1MCQSyttnFKBbf21cf7zXZsCm00YJ2ixwqoW_FbjI05S8_Kp0qTQaOybp_LneCg=s176-c-k-c0x00ffffff-no-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">UI Design Tutorial For Beginners</h3>
                                <div class="channel-name">Anthony Conboy</div>
                                <div class="views-upload">
                                    <div class="views">119K views .</div>
                                    <div class="upload">3 years ago</div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://www.youtube.com/watch?v=FNhjbNQ8Sik" class="video-box">
                            <img src="https://i.ytimg.com/vi/IEanDYMdSSE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnOwbTJDsABipiv44i7-QvR9esRA" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/uCdQFoM4TYfEZl8xiNLcKBYXVNeN6xF9aHaTWS8fq6k7UHzxjTBruCDDK0wCoFS4CWkBvDcccg=s48-c-k-c0x00ffffff-no-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">POCHETTINO UPDATE! Green light NAGELSMANN, KROOS SIGNED and Modrić…
</h3>
                                      <div class="channel-name">Fabrizio Romano
                                      </div>
                                <div class="views-upload">
                                    <div class="views">93K views .</div>
                                    <div class="upload">21 hours ago</div>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="" class="video-box">
                            <img src="https://i.ytimg.com/vi/DxNApvfnASM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVRLO6Mfq02SNYMHpesCDHe6XKOQ" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/BmoVKUYAALedDmKdsrD_f5Kj5adEfnWIGH03O_maKlpYacAsDF5PtEt5_iIYLOugB8XDrZ8vXw=s48-c-k-c0x00ffffff-no-nd-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">James Arthur - Quite Miss Home</h3>
                                <div class="channel-name">James Arthur</div>
                                <div class="views-upload">
                                    <div class="views">28M views .</div>
                                    <div class="upload">3 years ago</div>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/hebWYacbdvc" class="video-box">
                            <img src="https://i.ytimg.com/vi/hebWYacbdvc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjWTQOebknSrURPdGXWV9qBQjfLQ" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/Dd84-7pxMM5DvXGwsEoLv5NMdyeEJnGxhe0rtDuJslFN3YUKCOhN5R7n8--B6g33kPNV2Pv8Q28=s68-c-k-c0x00ffffff-no-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">The Flash – Official Trailer</h3>
                                <div class="channel-name">Warner Bros. Pictures</div>
                                <div class="views-upload">
                                    <div class="views">15M views .</div>
                                    <div class="upload">2 Months ago</div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden-content">
                            <div class="btn"><i class="ri-time-line"></i>Watch later</div>
                            <div class="btn"><i class="ri-play-list-2-line"></i>Add to queue</div>
                        </div>
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/fBNz5xF-Kx4" class="video-box">
                            <img src="https://i.ytimg.com/vi/fBNz5xF-Kx4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7RYKf6Hk2hePL1mN_9itEM1Sozw" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/ytc/AGIKgqNmm74Oc3eOE8_mXJlNFDEnFnTczyOPI5cByniTfA=s48-c-k-c0x00ffffff-no-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">Node.js Crash Course</h3>
                                <div class="channel-name">Traversy Media</div>
                                <div class="views-upload">
                                    <div class="views">1.4M views .</div>
                                    <div class="upload">4 years ago</div>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="video-content-cover">
                    <div class="video-content">
                        <a href="https://youtu.be/GZXHBgjQjNM" class="video-box">
                            <img src="https://i.ytimg.com/vi/GZXHBgjQjNM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwPgkYZgD_9lcTtEYiZGv97x8UwA" alt=""/>
                        </a>
                        <div class="video-details">
                            <div class="channel-logo">
                                <img src="https://yt3.ggpht.com/znXSJ_ZyiPuAQgy7cLmcj_ck8sBj_dOKHFl-HbWlpJ-vfKgdE-rLI8GsdWcD0QseGND87qCI=s48-c-k-c0x00ffffff-no-nd-rj" alt=""/>
                            </div>
                            <div class="detail">
                                <h3 class="title">Backstreet Boys - Drowning (Official HD Video)</h3>
                                <div class="channel-name">Backstreet Boys</div>
                                <div class="views-upload">
                                    <div class="views">192M views .</div>
                                    <div class="upload">12 years ago</div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden-content">
                            <div class="btn"><i class="ri-time-line"></i>Watch later</div>
                            <div class="btn"><i class="ri-play-list-2-line"></i>Add to queue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      </div>
  );
};

export default Sidebar;
