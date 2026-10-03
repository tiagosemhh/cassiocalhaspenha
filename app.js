
/**
 * Cássio Calhas Penha - Script de Interatividade Estática
 * Funciona diretamente sem compilação, sem Node.js e sem dependências.
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Cássio Calhas Penha - Site 100% carregado e funcional.');

  // 1. FAQ Accordion interativo
  const faqItems = document.querySelectorAll('#faq .border');
  faqItems.forEach(item => {
    const btn = item.querySelector('button');
    const answer = item.querySelector('p');
    const icon = btn ? btn.querySelector('svg') : null;
    
    // Inicia fechado exceto se tiver conteúdo aberto
    if (btn && answer) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = answer.style.display === 'block' || (!answer.classList.contains('hidden') && answer.style.display !== 'none');
        
        // Fecha os outros
        faqItems.forEach(other => {
          const otherAns = other.querySelector('p');
          const otherIcon = other.querySelector('button svg');
          if (otherAns) {
            otherAns.style.display = 'none';
            otherAns.classList.add('hidden');
          }
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          answer.style.display = 'block';
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 2. Play Video ao clicar
  const video = document.querySelector('video');
  const videoOverlay = document.querySelector('.group .absolute.inset-0.bg-slate-950\\/40') || document.querySelector('video + div');
  if (video) {
    const playBtn = video.parentElement ? video.parentElement.querySelector('button') : null;
    const triggerPlay = () => {
      video.controls = true;
      video.play();
      if (playBtn) playBtn.style.display = 'none';
      if (videoOverlay) videoOverlay.style.display = 'none';
    };
    if (playBtn) playBtn.addEventListener('click', triggerPlay);
    video.addEventListener('click', triggerPlay);
  }

  // 3. Rolagem Suave para Âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 4. Modal "Ver Outros Serviços"
  const openOtherServicesBtns = Array.from(document.querySelectorAll('button')).filter(b => b.textContent && b.textContent.includes('Ver outros serviços'));
  
  openOtherServicesBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Criar modal dinamicamente caso não exista no DOM
      let modal = document.getElementById('modal-outros-servicos');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-outros-servicos';
        modal.className = 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6';
        modal.innerHTML = `
          <div class="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800">
            <div class="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 class="font-extrabold text-xl sm:text-2xl text-[#171277]">Outros Serviços Sob Medida</h3>
              <button id="close-modal-btn" class="text-slate-400 hover:text-slate-800 p-1.5 rounded-lg text-2xl font-bold cursor-pointer">&times;</button>
            </div>
            <div class="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p class="text-slate-600 text-sm sm:text-base">Além de calhas e rufos, fabricamos e instalamos sob medida:</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div class="bg-[#F7F7F7] rounded-2xl overflow-hidden border border-slate-200 p-4 flex flex-col justify-between">
                  <div>
                    <img src="https://i.imgur.com/qFSUYBV.jpg" alt="Vidros Temperados" class="w-full aspect-4/3 object-cover rounded-xl mb-3" />
                    <h4 class="font-bold text-lg text-[#171277]">Vidros Temperados</h4>
                    <p class="text-xs text-slate-600 mt-1">Sacadas, portas, janelas, guarda-corpos e box em vidro temperado sob medida.</p>
                  </div>
                  <a href="https://wa.me/5547992212779?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20Vidros%20Temperados." target="_blank" class="mt-4 w-full bg-[#08C5E5] text-slate-950 font-bold py-2.5 rounded-xl text-center text-xs block">Orçamento</a>
                </div>

                <div class="bg-[#F7F7F7] rounded-2xl overflow-hidden border border-slate-200 p-4 flex flex-col justify-between">
                  <div>
                    <img src="https://i.imgur.com/5B0jRI3.jpg" alt="Coifas de Churrasqueira" class="w-full aspect-4/3 object-cover rounded-xl mb-3" />
                    <h4 class="font-bold text-lg text-[#171277]">Coifas para Churrasqueira</h4>
                    <p class="text-xs text-slate-600 mt-1">Chaminés, dutos e exaustão metálica preta e inox para áreas gourmet.</p>
                  </div>
                  <a href="https://wa.me/5547992212779?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20Coifas%20de%20Churrasqueira." target="_blank" class="mt-4 w-full bg-[#08C5E5] text-slate-950 font-bold py-2.5 rounded-xl text-center text-xs block">Orçamento</a>
                </div>

                <div class="bg-[#F7F7F7] rounded-2xl overflow-hidden border border-slate-200 p-4 flex flex-col justify-between">
                  <div>
                    <img src="https://i.imgur.com/xUqTlVD.jpg" alt="Manutenção e Limpeza" class="w-full aspect-4/3 object-cover rounded-xl mb-3" />
                    <h4 class="font-bold text-lg text-[#171277]">Manutenção e Limpeza</h4>
                    <p class="text-xs text-slate-600 mt-1">Desobstrução, revisão de vedações e conserto de vazamentos e infiltrações.</p>
                  </div>
                  <a href="https://wa.me/5547992212779?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20Manutenção%20de%20Calhas." target="_blank" class="mt-4 w-full bg-[#08C5E5] text-slate-950 font-bold py-2.5 rounded-xl text-center text-xs block">Orçamento</a>
                </div>

              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button id="close-modal-footer" class="px-6 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs cursor-pointer">Fechar</button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (ev) => {
          if (ev.target === modal) modal.style.display = 'none';
        });
        document.getElementById('close-modal-btn')?.addEventListener('click', () => modal.style.display = 'none');
        document.getElementById('close-modal-footer')?.addEventListener('click', () => modal.style.display = 'none');
      }
      modal.style.display = 'flex';
    });
  });

  // 5. Links de Termos e Privacidade no Rodapé
  const footerLinks = document.querySelectorAll('footer button');
  footerLinks.forEach(fBtn => {
    fBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const txt = fBtn.textContent || '';
      alert(txt.includes('Privacidade') ? 'Política de Privacidade: Seus dados estão seguros e são usados apenas para contato comercial via WhatsApp.' : 'Termos de Uso: Todos os direitos reservados à Cássio Calhas Penha.');
    });
  });
});
