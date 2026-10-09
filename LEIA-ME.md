# Landing Page · Aurora dos Pássaros

## 1. Configurar (5 minutos)
Abra `index.html` num editor (VS Code ou o Bloco de Notas) e edite o bloco `AURORA_CONFIG` no topo:

| Campo | O que colocar |
|---|---|
| `whatsapp` | Seu número só com dígitos: `5581999998888` **(obrigatório)** |
| `creci`, `instagram`, `fotoCorretor` | Seus dados. Para a foto, salve `corretor.jpg` na pasta `assets` e use `'assets/corretor.jpg'` |
| `gtmId` | ID do Google Tag Manager (`GTM-XXXXXXX`). Troque também o `GTM-XXXXXXX` da tag `<noscript>` perto do fim do arquivo |
| `metaPixelId` | ID do Pixel da Meta, para medir quem veio dos anúncios do Instagram |
| `precoAPartir`, `parcelaAPartir` | Ex.: `'R$ 199.990'`. Vazio = "Tabela atualizada no WhatsApp" |
| `unidadesRestantes` + `unidadesTotais` | Mostram a barra de escassez. Use só números reais |
| `videos` | Lista de vídeos (YouTube, Vimeo ou MP4). Sem vídeo, aparece um tour animado com as imagens do book |

### Postar vídeos
- **YouTube** (recomendado, não pesa na página): suba o vídeo (pode ser "Não listado") e copie o ID do link. Em `youtube.com/watch?v=AbC123`, o ID é `AbC123`.
- **MP4 próprio**: crie a pasta `videos`, coloque o arquivo e use `{ tipo: 'mp4', src: 'videos/tour.mp4', ... }`.
- Com 2 ou mais vídeos aparece automaticamente a playlist em carrossel.

## 2. Publicar (grátis)
**Netlify Drop**: entre em app.netlify.com/drop e arraste a pasta inteira. Pronto, sai um link. Depois dá para ligar um domínio próprio (ex.: `aurora.windmais.com.br`).
Alternativas: Vercel, Hostinger, GitHub Pages. Envie sempre a pasta toda (`index.html` + `assets`).

## 3. Rastreamento: o que a página já dispara
| Evento | Quando |
|---|---|
| `lead_click` | Qualquer clique para o WhatsApp. Parâmetro `cta_location` diz qual botão (hero_primary, sticky_bottom, planta, quiz_submit...) |
| `lead_qualified` | Concluiu a pré-análise. Leva `renda_faixa`, `fgts`, `prazo` e `lead_temperature` (quente / morno / frio) |
| `quiz_step`, `plan_view`, `video_play`, `video_progress`, `image_view`, `gallery_filter`, `faq_open`, `scroll_depth` | Engajamento |

Todos os eventos levam a origem (`utm_*`, `gclid`, `fbclid`) e a mensagem do WhatsApp chega com `[origem: Instagram]`, `[origem: Google Ads]` etc. Assim você sabe de onde veio cada lead mesmo antes de olhar o painel.

### No Google Tag Manager
1. **Tag Google** (GA4) com seu `G-XXXXXXXXXX`, acionador *All Pages*.
2. **Acionador** → Evento personalizado → nome `lead_click`. Crie outro igual para `lead_qualified`.
3. **Tag de evento GA4** com nome `{{Event}}` disparando nesses acionadores. Adicione variáveis da camada de dados `cta_location` e `lead_temperature` como parâmetros.
4. **Google Ads** → Tag de *Conversão do Google Ads* no acionador `lead_click` (use `lead_qualified` se quiser otimizar só para leads qualificados).
5. No GA4: Administrador → Eventos → marque `lead_click` e `lead_qualified` como **eventos-chave**.

Sem GTM? Preencha `ga4Id` e `googleAdsConversion` direto no CONFIG.

### Links com UTM (para comparar canais)
- Bio do Instagram: `https://SEU-SITE/?utm_source=instagram&utm_medium=bio&utm_campaign=aurora`
- Stories: `...?utm_source=instagram&utm_medium=stories&utm_campaign=aurora`
- Google Ads: ative a marcação automática (gclid) na conta.

## 4. Editar o visual
As classes são Tailwind, já compiladas em `assets/app.css`. Se mudar classes no HTML, recompile:
```
npm i -D tailwindcss@3 && npx tailwindcss -c tailwind.config.js -i src/input.css -o assets/app.css --minify
```
Para textos e números, basta editar o HTML. Listas (lazer, FAQ, pilares, plantas) ficam no `<script>` final, em arrays fáceis de editar.

## 5. Antes de anunciar
- Confira com a Carrilho se pode usar as imagens do book e a marca no seu anúncio (normalmente sim para corretor credenciado).
- O rodapé já traz o aviso legal do book. Mantenha o CRECI visível.
