# ๐ MarketKirly - Clone
___     
  <img src="https://user-images.githubusercontent.com/110365677/190322449-868cf4e2-2ad6-4a50-b654-05fab751cdf2.png" />   

     
## ๐ฆพ ๊ตฌํ๊ธฐ๋ฅ   

 +  ํ์๊ฐ์: ํ์๊ฐ์ ์ ํจ์ฑ ๊ฒ์ฌ   
 +  ๋ก๊ทธ์ธ : ๋ก๊ทธ์ธ ์ ํจ์ฑ ๊ฒ์ฌ   
 +  ๋ฉ์ธํ์ด์ง : ์ํ ํด๋ฆญ์ ์์ธํ์ด์ง ์ด๋   
 +  ์์ธํ์ด์ง : ์ฅ๋ฐ๊ตฌ๋ ๋ด๊ธฐ ๋ฐ ์ํ ์๋ ๋ณ๊ฒฝ    
 +  ์ฅ๋ฐ๊ตฌ๋ ๊ธฐ๋ฅ   
 
## ๐ ํ๋ก์ ํธ ๊ธฐ๊ฐ   
  2022๋ 9์ 9์ผ ~ 2022๋ 9์ 15์ผ   
  ์๋ฒ๋ฐฐํฌ : 2022๋ 9์ 15์ผ   
      
## ๐โโ๏ธ ํ ์๊ฐ    
+  [CMS-Front] ์ฅํ์ฑ : https://github.com/artlogy/MarketKurly-CMS   
+  [Front] ์กฐ์์ง : https://github.com/suzz-in  
+  [Front] ์๋ค์ค  
+  [BackEnd] ์ด์๋ฏผ, ๋ฐฐ์ํ, ์์ฌ์, ์ ์๋ฏผ : https://github.com/bsh9254/MarketKurly-BE   

## ๐  ์ค์นํจํค์ง
 
```yarn add aixos```   
```yarn add react-icons```    
```yarn add redux```  
```Yarn add @reduxjs/toolkit```   
```yarn add react-router-dom```   
```yarn add styled-components```   
```yarn add swiper```   
   
   
## ๐ฅ Trouble Shooting   
+ ๋ก๊ทธ์ธ ์๋ฒ ์ฐ๊ฒฐ ํ Refresh-token์ localstorage์ ํ์ธ์ด ๋๋, Authorization์ undefind๋ก ๋จ๋ ๋ฌธ์     
   - => ```console.log(response.headers)``` ํ์ธ์ ํตํด ํ ํฐ๋ช "authorization" ์ธ ๊ฒ์ ํ์ธ ํ ํด๊ฒฐ
+ ๊ฐ์ ์๋ณ์๋ช์ผ๋ก ์ด์ค๋ฐฐ์ด ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ์ฌ ํผ๋ํจ    
   - =>๋๋ฒ๊น ์ค ์ด ํธ๋ฌ๋ธ ๋ฐ๊ฒฌํ์ฌ ๊ฐ์ฒด ์ด๋ฆ ์์ ์ ํตํด ์ถํ ์์ ํผ๋ ๋ฏธ์ฐ์ ๋ฐฉ์งํจ 
+ ํ๋์ ์ค์์ดํผ์ 4๊ฐ์ ์ด๋ฏธ์ง๊ฐ ๋ฃ์ด์ง์ง ์๊ณ  ํ๋์ ์ด๋ฏธ์ง๋ง ๋ฃ์ด์ง 
   - => ์ค์์ดํผ ๊ทธ๋ฃน์ค์  ํด์ค ``` slidesPerGroup={4}``` ์ผ๋ก ์ค์ 
   
## ๐ญ ์์ฌ์ด์     
*  ์๊ฐ๋ถ์กฑ์ผ๋ก ๊ตฌ๊ธ๋ก๊ทธ์ธ ๊ตฌํ๋ชปํจ     
*  ์๋ฒ ์ฐ๊ฒฐ์ด ์๋์ด ```axios.interceptor``` ๋ฅผ ์ฌ์ฉํด๋ณด์ง ๋ชปํ ์  + ๋ก๊ทธ์์ ๊ตฌํ ๋ชปํ์    
