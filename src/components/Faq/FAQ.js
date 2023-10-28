import React from "react";
import './FAQ.css'

var faqs = [
    {
      'question':'O que é Spotify?',
      'answer':'Spotify é uma plataforma de streaming de música que permite aos usuários ouvir uma ampla variedade de músicas, álbuns e playlists online.'
    },
    {
      'question':'Como posso criar uma conta?',
      'answer':'Para criar uma conta em Spotify, visite nosso site oficial e clique em "Registrar". Preencha as informações necessárias e siga as instruções para concluir o processo de registro.'
    },
    {
      'question':'Quais são as opções de assinatura disponíveis?',
      'answer':'Oferecemos opções de assinatura gratuita com anúncios e assinaturas premium sem anúncios. Nossos planos premium também podem incluir recursos como downloads offline e qualidade de áudio superior.'
    },
    {
      'question':'Como faço para cancelar minha assinatura premium?',
      'answer':'Você pode cancelar sua assinatura premium acessando suas configurações de conta e navegando até a seção de assinatura. Siga as instruções para cancelar sua assinatura.'
    },
    {
      'question':'Posso baixar músicas para ouvir offline?',
      'answer':'Sim, os assinantes premium podem baixar músicas para ouvir offline em dispositivos compatíveis. Basta selecionar a opção de download nas músicas ou playlists que deseja salvar offline.'
    },
    {
      'question':'Spotify está disponível em quais dispositivos?',
      'answer':'Spotify está disponível em smartphones, tablets, computadores e dispositivos compatíveis com a Internet. Também oferecemos aplicativos para iOS, Android, Windows e mais.'
    },
    {
      'question':'Como crio e compartilho minhas playlists?',
      'answer':'Você pode criar playlists personalizadas em Spotify selecionando suas músicas favoritas e agrupando-as em uma playlist. Depois de criar uma playlist, você pode compartilhá-la com amigos por meio de links ou redes sociais.'
    },
    {
      'question':'Posso transferir minhas playlists de outras plataformas para Spotify?',
      'answer':'Sim, em muitos casos, você pode importar playlists de outras plataformas populares para Spotify usando ferramentas de importação. Verifique nossas opções de importação na seção de configurações.'
    },
    {
      'question':'Como funciona a recomendação de músicas em Spotify?',
      'answer':'Utilizamos algoritmos de recomendação para analisar suas preferências musicais e fornecer sugestões com base no que você ouviu anteriormente. Quanto mais você ouve, mais precisas são as recomendações.'
    },
    {
      'question':'Como entro em contato com o suporte ao cliente?',
      'answer':'Você pode entrar em contato com nosso suporte ao cliente através da seção de Ajuda ou Suporte em nosso site. Lá, você encontrará opções de chat ao vivo, e-mail e FAQs adicionais.'
    }
  ]

export default function App(props){
    
    var faq_set = []

    for(var i = 0; i < faqs.length; i++){
        const faq = faqs[i];
        faq_set.push(
            <div className="faq-item">
                <details>
                    <summary className="faq-question">{faq['question']}</summary>
                    <div className="faq-answer">{faq['answer']}</div>
                </details>
            </div>
        )
    }
  
    return (
      <div id="faq-container">
        {faq_set}
      </div>
    );
}