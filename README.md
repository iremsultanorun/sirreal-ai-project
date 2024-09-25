# Sirreal AI Projesi


## Kısa Tanıtım

Bu proje, dls_design Instagram hesabındaki bir tasarımdan esinlenerek oluşturulmuş bir Sirreal.ai tanıtım sitesidir. Sitede koleksiyonlar, tutoriallar, roadmapler ve bloglar gibi çeşitli bölümler bulunmaktadır. (Sirreal.ai hakkında ulaşılabilen bilgiler ışığında yapılmıştır. Yeterli bilgiye ulaşılamadığı için yaratıcılıkla desteklenmeye çalışılmıştır; bu yüzden bazı kısımlar eksik kalmış ve sayfa yönlendirmelerinde ortak bir gösterim sayfası kullanılmıştır.)

## Özellikler

- Full responsive
- Sürükleyici sayfa animasyonu
- Etkileyici sayfa tasarımı

## Kullanılan Teknolojiler

**React**: Kullanıcı arayüzü için kullanılan bir JavaScript kütüphanesi.
**Formik**: Form durum yönetimi kütüphanesidir.
  ```bash
  npm install formik
  ```
**Yup**: Form doğrulama ve veri şemaları oluşturmak için kullanılan bir doğrulama kütüphanesidir.
  ```bash
  npm install yup
  ```
**Framer-Motion**: Animasyonlar ile sayfalara akıcılık ve sürükleyicilik katan bir animasyon kütüphaneisidir.
  ```bash
  npm install framer-motion
  ```
**Lorem-Ipsum**: Random metin oluşturmayı kolaylaştıra bir kütüphanedir
  ```bash
  npm install lorem-ipsum
  ```
**React-Helmet**: React uygulamalarında HTML başlıklarını (head) ve meta etiketlerini dinamik olarak yönetmek için kullanılan bir kütüphanedir. 
  ```bash
  npm install react-helmet
  ```
**React-Icons**: Reactta iconları kolaya kullanmak için geliştirilmiş bir icon kütüphanesidir
  ```bash
  npm install react-icons
  ```
**React-Redux**: Uygulamanın durumunu yönetir ve durumun tek bir yerden yönetilmesini sağlayan bir kütüphanedir
  ```bash
  npm install react-redux
  ```
**React-Router-Dom**:  React uygulamalarında yönlendirme (routing) işlemlerini yönetmek için kullanılan bir kütüphanedir
  ```bash
  npm install react-router-dom
  ```
**React-Router-Hash-Link**: React uygulamalarında sayfa içi yönlendirme işlemlerini yönetmek için kullanılan bir kütüphanedir. sayfa render edildiğinde kullanıcının yönlendirdiği konumda kalmasını sağlar.
  ```bash
  npm install react-router-hash-link
  ```
## Kurulum

1. cd sirreal-ai-project
2. npm install
3. npm run dev

## Home Section

![Home section image](./src/assets/Readme%20images/Home-section.png)
Home section kısmında bir header bulunmaktadır. Bu header içinde logomuz, navbar’ımız, search ve bildirimler kısmımız yer almaktadır. Sayfanın çoğunda metinler, Lorem Ipsum kütüphanesi ile üretildiği için birçok kelime benzer ve filtrelemesi zor. Bu nedenle, search kısmında sadece göstermelik bir input ve ikon bulunmaktadır. Navbar item’lara tıklandığında ise hash link ile sayfa içi yönlendirme sağlanmıştır.
![Notification section image](./src/assets/Readme%20images/Notification-modal.png)
Bildirimler kısmında rastgele bildirimler gelmektedir. Bu bildirimlere tıklandığında bildirim içeriğinin tamamı görünür hale gelmektedir. Okunmuş ve okunmamış bildirimleri ayırt etmek için de div üzerinde değişiklikler yapılarak farklılaşma sağlanmıştır.

Yine bu bölümde (Home section) bir videomuz, ufak bilgilendirme içeren bir bilgi konteynerimiz ve blogları içeren bir slider kısmımız bulunmaktadır.

## Collection Section
![Collection section image](./src/assets/Readme%20images/Collection-section1.png)
![Collection section image](./src/assets/Readme%20images/Collection-section2.png)
Bu bölümde koleksiyonlarımız, başlıklarla birlikte ayrı kısımlarda sınıflandırılmıştır. "More collections" butonu ile koleksiyonların tamamına ulaşılması hedeflenmiştir.
![Collection section image](./src/assets/Readme%20images/Collection-section-item-modal.png)
Collection item'a tıklandığında açılan bir modal bulunmaktadır. Bu modal, itemın bilgilerini içeren bir yapıdır.

## Roadmap Section
![Roadmap section image](./src/assets/Readme%20images/Roadmap-section.png)

## Footer Section
![Footer section image](./src/assets/Readme%20images/Footer-section.png)
Navbar’daki sayfa linkleri, burada da kullanılarak sayfanın tamamına hızlı ve kolay erişim sağlanması hedeflenmiştir. Abone ol kısmının burada bulunmasıyla birlikte, sayfanın diğer bölümlerinden bu kısma hash link ile yönlendirmeler gerçekleştirilmiştir.

# Sirreal AI Project

## Brief Introduction

This project is a promotional site for Sirreal.ai, inspired by a design from the dls_design Instagram account. The site includes various sections such as collections, tutorials, roadmaps, and blogs. (It has been created based on the available information about Sirreal.ai. Due to insufficient information, creativity has been employed to fill in the gaps; therefore, some sections remain incomplete, and a common display page has been used for page redirects.)

## Features

- Fully responsive
- Engaging page animations
- Impressive page design

## Technologies Used

**React**: A JavaScript library for building user interfaces.
```bash
npm install react
```
**Formik**: A library for managing form state.
```bash
npm install formik
```
**Yup**: A validation library used for form validation and creating data schemas.
```bash
npm install yup
```
**Framer Motion**: An animation library that adds fluidity and interactivity to pages through animations.
```bash
npm install framer-motion
```
**Lorem Ipsum**: A library that simplifies the generation of random text.
```bash
npm install lorem-ipsum
```
**React Helmet**: A library for dynamically managing HTML head and meta tags in React applications.
```bash
npm install react-helmet
```
**React Icons**: An icon library developed for easy usage of icons in React.
```bash
npm install react-icons
```
**React Redux**: A library that manages the application's state and ensures it is managed from a single source.
```bash
npm install react-redux
```
**React Router Dom**: A library used for managing routing operations in React applications.
```bash
npm install react-router-dom
```
**React Router Hash Link**: A library for managing in-page routing operations in React applications, ensuring the user remains at the location they directed to when the page is rendered.
```bash
npm install react-router-hash-link
```

## Installation

1. cd sirreal-ai-project
2. npm install
3. npm run dev

## Home Section

![Home section image](./src/assets/Readme%20images/Home-section.png)
In the Home section, there is a header that includes our logo, navbar, search, and notifications sections. Since most of the text on the page is generated using the Lorem Ipsum library, many words are similar and difficult to filter. Therefore, the search section contains only a placeholder input and icon. Clicking on navbar items provides in-page navigation using hash links.
![Notification section image](./src/assets/Readme%20images/Notification-modal.png)
The notifications section contains random notifications. When these notifications are clicked, the full content of the notification becomes visible. To differentiate between read and unread notifications, changes are made to the div for distinction.

In this section (Home section), we also have a video, a small information container, and a slider section that includes blogs.

## Collection Section
![Collection section image](./src/assets/Readme%20images/Collection-section1.png)
![Collection section image](./src/assets/Readme%20images/Collection-section2.png)
In this section, our collections are classified into separate parts with headings. The "More collections" button aims to provide access to all collections.
![Collection section image](./src/assets/Readme%20images/Collection-section-item-modal.png)
There is a modal that opens when a collection item is clicked. This modal contains the information of the item.

## Roadmap Section
![Roadmap section image](./src/assets/Readme%20images/Roadmap-section.png)

## Footer Section
![Footer section image](./src/assets/Readme%20images/Footer-section.png)
The page links in the navbar are also used here to provide quick and easy access to the entire page. With the subscription section located here, hash link navigation from other parts of the page to this section has been implemented.