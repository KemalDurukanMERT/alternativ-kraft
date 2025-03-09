# User Management App

## Proje Açıklaması
User Management App, **Next.js** kullanılarak geliştirilmiş bir kullanıcı yönetim uygulamasıdır. **Redux Toolkit** ile state yönetimi sağlanmış ve **JSONPlaceholder API** üzerinden veri çekilerek **CRUD (Create, Read, Update, Delete)** işlemleri uygulanmıştır.

## Kullanılan Teknolojiler
- **Next.js** – React tabanlı framework
- **Redux Toolkit** – Global state yönetimi
- **Tailwind CSS** – Modern ve hızlı stillendirme
- **React Icons** – Simge kullanımı
- **React Toastify** – Kullanıcı bildirimleri
- **Axios** – API istekleri için HTTP istemcisi

## Özellikler
- **API ile Kullanıcı Verisi Çekme**: Kullanıcı listesi `https://jsonplaceholder.typicode.com/users` API’sinden alınmaktadır.
- **Kullanıcı Listesi**: Ana sayfada kullanıcıların temel bilgileri kart formatında listelenir.
- **Detay Sayfası**: Kullanıcı kartına tıklayan kullanıcı, detay sayfasına yönlendirilir.
- **Kullanıcı Güncelleme**: Kullanıcı kartındaki kalem simgesine tıklayarak modal içinde bilgiler güncellenebilir.
- **Kullanıcı Silme**: Çöp kutusu simgesi ile kullanıcı silinebilir.
- **React Toastify Bildirimleri**: CRUD işlemleri sonrasında kullanıcıya bilgi mesajları gösterilir.


🔗 **Uygulama şimdi şu adreste çalışacaktır:** `http://localhost:3000`

## 🔄 API Kullanımı
Projede **JSONPlaceholder API** kullanılmıştır. Aşağıdaki uç noktalar kullanılmaktadır:

- **Tüm Kullanıcıları Getir:** `GET /users`
- **Yeni Kullanıcı Ekle:** `POST /users`
- **Kullanıcı Güncelle:** `PUT /users/:id`
- **Kullanıcı Sil:** `DELETE /users/:id`



