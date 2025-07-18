## next build (Standard Build)

- Pages are pre-rendered (if possible) but Node.js server is required for API routes, server-side pages and page revalidations
  Sayfalar önceden işlenir (mümkünse) ancak API rotaları, sunucu tarafı sayfaları ve sayfa yeniden doğrulamaları için Node.js sunucusu gereklidir
- Ayrıca, fallback true veya blacking olarak ayarladıysak getStaticPaths ile dinamik sayfalar için bir NodeJS sunucusuna ihtiyacımız var, çünkü bu durumda bazı sayfalar, istekler sunucuya ulaştığında anında oluşturulacaktır. Bunun için de bunu yapabilecek bir sunucuya ihtiyacınız var. İşte bu yüzden bir sonraki derlemenin size verdiği çıktıyı çalıştırmak için bir NodeJS sunucusuna ihtiyacınız var.

## next export (Full Static Build)

- Sadece 100% static app üretir. Node.js gerekli değildir.
  Örneğin, siteniz API rotalarına dayanıyorsa, get service-side prop'ları olan hizmet tarafı sayfalarında, sayfa yeniden doğrulamalarında veya fallback true veya blocking olarak ayarlanmış statik yollarınız varsa next export'u kullanamazsınız.

  ## Deployment steps

- Add metadata, optimize code, remove unnecessary dependencies
- Use env variables for variables for variable data (e.g. API keys)
  - https://nextjs.org/docs/13/app/api-reference/next-config-js
- Do a test build and test the production-ready app locally or on some test server

## PHASE_DEVELOPMENT_SERVER

Ne zaman çalışır?: next dev komutu ile çalıştırıldığında.

Ne amaçla?: Geliştirme sırasında, hot-reload destekli yerel sunucu için kullanılır.

Kullanım senaryosu: Örneğin sadece development ortamına özel bir API anahtarı kullanmak.

## PHASE_EXPORT

Ne zaman çalışır?: next export komutu ile statik HTML çıktısı alınırken.

Ne amaçla?: Uygulaman statik olarak export edildiğinde devreye girer.

Kullanım senaryosu: Statik siteler için özelleştirme yapılması gereken durumlarda.

## PHASE_PRODUCTION_BUILD

Ne zaman çalışır?: next build sırasında.

Ne amaçla?: Üretim için build süreci gerçekleşirken kullanılır.

Kullanım senaryosu: Örneğin sadece build aşamasında çalışan analiz veya loglama araçlarını buraya koyabilirsin.

## PHASE_PRODUCTION_SERVER

Ne zaman çalışır?: next start komutu çalıştırıldığında (build sonrası üretim sunucusu başlatıldığında).

Ne amaçla?: Gerçek kullanıcıların gördüğü sunucu ortamı.

Kullanım senaryosu: Örneğin üretim ortamına özel konfigürasyon veya izleme servislerini burada çalıştırmak.

```
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER
} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: 'http://localhost:3000'
      }
    };
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    // sadece build sırasında yapılacak ayarlar
  }

  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      env: {
        API_URL: 'https://your-production-url.com'
      }
    };
  }

  return {};
};
```
