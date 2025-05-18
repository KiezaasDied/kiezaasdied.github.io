
fetch("https://ipinfo.io/json?token=47f54d4d8f4d82")  // ipinfo.io ücretsiz token (sınırlı kullanımlı)
  .then((response) => response.json())
  .then((data) => {
    const message = `
Ziyaretçi Girişi:
IP: ${data.ip}
Ülke: ${data.country}
Şehir: ${data.city}
İnternet Sağlayıcı: ${data.org}
Lokasyon: ${data.loc}
Zaman Dilimi: ${data.timezone}
Tarih: ${new Date().toLocaleString()}
`;

    fetch("https://api.telegram.org/bot7887868111:AAEFAJQmhd-eiTRdxWzkSnAsYWu4LoGtbZ4/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "7094208056",
        text: message
      })
    });
  })
  .catch((error) => {
    console.error("IP bilgisi alınamadı:", error);
  });
