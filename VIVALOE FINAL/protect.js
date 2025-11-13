/**
 * =====================================================================
 * VIVALOE - SISTEMA DE PROTEÇÃO SEO-FRIENDLY v3.0
 * =====================================================================
 * 
 * ✅ PROTEÇÃO COMPLETA NO DESKTOP (humanos)
 * ✅ FUNCIONALIDADE TOTAL NO MOBILE 
 * ✅ TRANSPARENTE PARA GOOGLEBOT E INDEXADORES
 * ✅ OTIMIZADO PARA PERFORMANCE E SEO
 * =====================================================================
 */

(function() {
    "use strict";

    // ===========================================
    // DETECÇÃO INTELIGENTE DE DISPOSITIVO E BOT
    // ===========================================
    const userAgent = navigator.userAgent.toLowerCase();

    // Detecta dispositivos móveis e tablets
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent) || window.innerWidth <= 768;
    const isTablet = /ipad|android/i.test(userAgent) &amp;&amp; window.innerWidth > 768 &amp;&amp; window.innerWidth <= 4;

    // Detecta bots e indexadores (SEO-friendly)
    const isBot = /bot|crawler|spider|googlebot|bingbot|yahoo|slurp|duckduckbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|applebot|googleweblight|adsbot|mediapartners/i.test(userAgent);

    // Detecta navegadores headless ou ferramentas de análise
    const isHeadless = /headless|phantom|selenium|chrome-lighthouse|chrome-headless/i.test(userAgent);

    // Log de debug (apenas em desenvolvimento)
    if (isBot) {
        console.log("🤖 [VIVALOE] Modo Indexador Detectado - Proteção Mínima (SEO Ativo)");
    } else if (isMobile) {
        console.log("📱 [VIVALOE] Modo Mobile - Navegação Totalmente Livre");
    } else {
        console.log("💻 [VIVALOE] Modo Desktop - Proteção Completa Ativada");
    }

    // ===========================================
    // VARIÁVEIS DE CONTROLE DE PROTEÇÃO
    // ===========================================
    let devtoolsOpen = false;
    let devtoolsDetected = false;
    let protectionActivated = false;
    let botProtectionDisabled = isBot || isHeadless;

    // ===========================================
    // FUNÇÃO DE PROTEÇÃO VISUAL (HUMANO-DESKTOP APENAS)
    // ===========================================
    const showProtection = function(message = "Conteúdo Protegido") {
        // NUNCA ativa para bots ou indexadores
        if (botProtectionDisabled || isMobile) {
            return false;
        }

        if (!devtoolsDetected &amp;&amp; !protectionActivated) {
            protectionActivated = true;
            devtoolsDetected = true;

            // Preserva o conteúdo original para SEO (não substitui completamente)
            const originalContent = document.body.innerHTML;

            document.body.innerHTML = `
                <div id="protection-overlay" style="
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); 
                    display: flex; align-items: center; justify-content: center; 
                    z-index: 999999; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                ">
                    <div style="
                        background: white; padding: 40px; border-radius: 20px; 
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 500px; 
                        text-align: center; border: 1px solid #e0e6ed;
                    ">
                        <div style="margin-bottom: 20px;">
                            <div style="
                                width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                                border-radius: 50%; display: flex; align-items: center; justify-content: center; 
                                margin: 0 auto 20px; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                            ">
                                <svg style="width: 40px; height: 40px; fill: white;" viewBox="0 0 24 24">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zM12 15.4c-1.76 0-3.22-1.3-3.46-3L12 11l3.46 1.4c-.24 1.7-1.7 3-3.46 3z"/>
                                </svg>
                            </div>
                            <h1 style="color: #2d3748; font-size: 2.2em; font-weight: 700; margin: 0 0 15px;">
                                🔒 ${message}
                            </h1>
                            <p style="color: #718096; font-size: 1.1em; line-height: 1.6; margin: 0 0 25px;">
                                Esta página contém conteúdo protegido e não pode ser visualizada através de ferramentas de desenvolvedor.
                            </p>
                            <p style="color: #a0aec0; font-size: 0.95em; margin: 0 0 30px;">
                                Feche as ferramentas de inspeção para continuar navegando normalmente.
                            </p>
                        </div>

                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="location.reload()" style="
                                background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); 
                                color: white; padding: 12px 30px; border: none; border-radius: 50px; 
                                font-size: 1em; font-weight: 600; cursor: pointer; 
                                box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3); 
                                transition: all 0.3s ease; min-width: 140px;
                            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(72,187,120,0.4)'" 
                               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(72,187,120,0.3)'">
                                🔄 Recarregar
                            </button>

                            <button onclick="window.location.href='https://vivaloe.netlify.app'" style="
                                background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); 
                                color: white; padding: 12px 30px; border: none; border-radius: 50px; 
                                font-size: 1em; font-weight: 600; cursor: pointer; 
                                box-shadow: 0 4px 15px rgba(237, 137, 54, 0.3); 
                                transition: all 0.3s ease; min-width: 140px;
                            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(237,137,54,0.4)'" 
                               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(237,137,54,0.3)'">
                                🏠 Voltar ao Início
                            </button>
                        </div>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #a0aec0; font-size: 0.85em; margin: 0; text-align: center;">
                                © 2025 VIVALOE - Proteção de Conteúdo Ativa
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Preserva conteúdo original em elemento oculto para SEO -->
                <div id="seo-preserved-content" style="display: none; position: absolute; left: -9999px;">
                    ${originalContent}
                </div>
            `;

            document.title = "🔒 Conteúdo Protegido - VIVALOE";
            console.clear();
            console.log("🔒 [VIVALOE] Proteção ativada - DevTools detectado");

            // Remove event listeners para evitar loops
            document.removeEventListener("keydown", handleKeydown);
            clearInterval(devtoolsCheckInterval);
        }
        return true;
    };

    // ===========================================
    // BLOQUEIO DE EVENTOS DE TECLADO (DESKTOP HUMANO)
    // ===========================================
    function handleKeydown(e) {
        // NUNCA bloqueia para bots ou mobile
        if (botProtectionDisabled || isMobile) {
            return true;
        }

        // Bloqueia F12 e atalhos de desenvolvedor
        if (e.key === "F12" || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            showProtection("Ferramentas de Desenvolvedor Bloqueadas");
            return false;
        }

        // Bloqueia Ctrl+Shift+I (Chrome DevTools)
        if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; (e.key === "I" || e.keyCode === 73)) {
            e.preventDefault();
            e.stopPropagation();
            showProtection("Inspeção de Elementos Bloqueada");
            return false;
        }

        // Bloqueia Ctrl+Shift+J (Console)
        if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; (e.key === "J" || e.keyCode === 74)) {
            e.preventDefault();
            e.stopPropagation();
            showProtection("Console do Desenvolvedor Bloqueado");
            return false;
        }

        // Bloqueia Ctrl+U (View Source)
        if (e.ctrlKey &amp;&amp; (e.key === "u" || e.key === "U" || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            showProtection("Visualização do Código Bloqueada");
            return false;
        }

        // Bloqueia Ctrl+S (Save Page)
        if (e.ctrlKey &amp;&amp; (e.key === "s" || e.key === "S" || e.keyCode === 83)) {
            e.preventDefault();
            e.stopPropagation();
            showProtection("Download da Página Bloqueado");
            return false;
        }

        // Bloqueia Ctrl+P (Print)
        if (e.ctrlKey &amp;&amp; (e.key === "p" || e.key === "P" || e.keyCode === 80)) {
            e.preventDefault();
            e.stopPropagation();
            showProtection("Impressão Bloqueada");
            return false;
        }

        // Bloqueia Ctrl+A (Select All) - permite em mobile e bots
        if (e.ctrlKey &amp;&amp; (e.key === "a" || e.key === "A" || e.keyCode === 65)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }

    // Aplica bloqueio de teclado apenas para desktop humano
    if (!botProtectionDisabled &amp;&amp; !isMobile) {
        document.addEventListener("keydown", handleKeydown, false);
    }

    // ===========================================
    // BLOQUEIO DE CONTEXT MENU (ADAPTADO)
    // ===========================================
    document.addEventListener("contextmenu", function(e) {
        // Permite para bots, mobile e elementos específicos
        if (botProtectionDisabled || isMobile || 
            e.target.tagName === "A" || 
            e.target.closest("button") || 
            e.target.closest(".allow-context")) {
            return true;
        }

        e.preventDefault();
        e.stopPropagation();

        // Mostra mensagem customizada para clique direito
        if (!isMobile) {
            const rect = e.target.getBoundingClientRect();
            const tooltip = document.createElement("div");
            tooltip.style.cssText = `
                position: fixed; left: ${e.clientX}px; top: ${e.clientY}px; 
                background: #2d3748; color: white; padding: 8px 12px; 
                border-radius: 6px; font-size: 12px; z-index: 99999; 
                pointer-events: none; transform: translateY(-100%);
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            `;
            tooltip.textContent = "🔒 Função desabilitada";
            document.body.appendChild(tooltip);

            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 2000);
        }

        return false;
    }, false);

    // ===========================================
    // BLOQUEIO DE SELEÇÃO E CÓPIA (SELETIVO)
    // ===========================================
    function applySelectionProtection() {
        if (botProtectionDisabled || isMobile) {
            // Para bots e mobile: permite seleção total para SEO e UX
            document.body.style.userSelect = "text";
            document.body.style.webkitUserSelect = "text";
            document.body.style.mozUserSelect = "text";
            document.body.style.msUserSelect = "text";
            return;
        }

        // Desktop humano: bloqueia seleção seletiva
        const selectionElements = document.querySelectorAll("body *:not(.allow-select):not(a):not(button):not(input):not(textarea):not(.selectable)");

        selectionElements.forEach(el => {
            el.style.userSelect = "none";
            el.style.webkitUserSelect = "none";
            el.style.mozUserSelect = "none";
            el.style.msUserSelect = "none";
            el.style.cursor = "default";
        });

        // Bloqueia cópia de conteúdo sensível
        document.addEventListener("copy", function(e) {
            if (botProtectionDisabled || isMobile) {
                return true; // Permite cópia para bots e mobile
            }

            const selection = window.getSelection();
            const selectedText = selection.toString();

            // Permite cópia de trechos curtos (até 100 caracteres)
            if (selectedText.length <= 100 &amp;&amp; !selectedText.includes("src=") &amp;&amp; !selectedText.includes("style=")) {
                return true;
            }

            // Bloqueia cópia de código, URLs ou conteúdo longo
            e.preventDefault();
            e.stopPropagation();

            // Mostra mensagem de cópia bloqueada
            const rect = selection.getRangeAt(0).getBoundingClientRect();
            const message = document.createElement("div");
            message.style.cssText = `
                position: fixed; left: ${rect.left}px; top: ${rect.top - 40}px; 
                background: #f56565; color: white; padding: 6px 10px; 
                border-radius: 4px; font-size: 11px; z-index: 99999; 
                pointer-events: none; white-space: nowrap;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            `;
            message.textContent = "📋 Cópia bloqueada";
            document.body.appendChild(message);

            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 1500);

            return false;
        });

        // Bloqueia corte de conteúdo
        document.addEventListener("cut", function(e) {
            if (botProtectionDisabled || isMobile) {
                return true;
            }
            e.preventDefault();
            return false;
        });
    }

    // ===========================================
    // PROTEÇÃO DE IMAGENS (SELETIVA E SEO-SAFE)
    // ===========================================
    function protectImages() {
        const mediaElements = document.querySelectorAll("img, picture img, svg image, video");

        mediaElements.forEach(media => {
            // Garante atributos ALT para SEO (obrigatório)
            if (!media.alt || media.alt.trim() === "") {
                media.alt = media.src ? `Imagem ${media.src.split('/').pop().split('.')[0]}` : "Imagem da VIVALOE";
            }

            // Adiciona título descritivo se não existir
            if (!media.title) {
                media.title = media.alt;
            }

            if (botProtectionDisabled || isMobile) {
                // Para bots e mobile: permite visualização total
                media.style.pointerEvents = "auto";
                media.style.userSelect = "none"; // Apenas para evitar seleção acidental
                media.draggable = false; // Previne drag simples
                return;
            }

            // Desktop humano: proteção avançada de imagens
            media.style.pointerEvents = "none";
            media.style.userSelect = "none";
            media.draggable = false;

            // Bloqueia contexto em imagens
            media.addEventListener("contextmenu", function(e) {
                e.preventDefault();
                e.stopPropagation();

                // Mostra tooltip de proteção
                const rect = media.getBoundingClientRect();
                const tooltip = document.createElement("div");
                tooltip.style.cssText = `
                    position: fixed; left: ${rect.left + rect.width/2}px; 
                    top: ${rect.top - 30}px; transform: translateX(-50%);
                    background: #2d3748; color: white; padding: 6px 12px; 
                    border-radius: 6px; font-size: 11px; z-index: 99999; 
                    pointer-events: none; white-space: nowrap;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                `;
                tooltip.textContent = "🖼️ Download protegido";
                document.body.appendChild(tooltip);

                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 2000);

                return false;
            });

            // Bloqueia drag de imagens
            media.addEventListener("dragstart", function(e) {
                e.preventDefault();
                return false;
            });

            // Adiciona proteção contra hotlink (se possível)
            if (media.src &amp;&amp; media.src.startsWith("http")) {
                media.src = media.src + (media.src.includes("?") ? "&amp;" : "?") + "t=" + Date.now();
            }
        });

        // Protege backgrounds de imagens via CSS
        const style = document.createElement("style");
        style.textContent = `
            img, picture img { 
                -webkit-user-drag: none; 
                -khtml-user-drag: none; 
                -moz-user-drag: none; 
                -o-user-drag: none; 
                user-drag: none;
            }

            /* Protege canvas e elementos gráficos */
            canvas { 
                -webkit-user-select: none; 
                -moz-user-select: none; 
                -ms-user-select: none; 
                user-select: none; 
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    // ===========================================
    // DETECÇÃO DE DEVTOOLS (DESKTOP HUMANO APENAS)
    // ===========================================
    let devtoolsCheckInterval;

    function detectDevTools() {
        // NUNCA executa para bots ou mobile
        if (botProtectionDisabled || isMobile) {
            return false;
        }

        // Método 1: Diferença de dimensões da janela (otimizado)
        try {
            const widthDiff = window.outerWidth - window.innerWidth;
            const heightDiff = window.outerHeight - window.innerHeight;

            if (widthDiff > 150 || heightDiff > 100) {
                return { method: "window-resize", confidence: 0.9 };
            }
        } catch (e) {
            return false;
        }

        // Método 2: Teste de console (leve)
        try {
            const testConsole = console.log;
            console.log = function() {
                console.log = testConsole;
                return showProtection("Uso de Console Detectado");
            };

            setTimeout(() => {
                console.log = testConsole;
            }, 100);
        } catch (e) {
            return { method: "console-test", confidence: 0.7 };
        }

        // Método 3: Verificação de plugins (Chrome DevTools)
        try {
            if (window.outerHeight - window.innerHeight > 100 || 
                window.outerWidth - window.innerWidth > 100) {
                return { method: "plugin-detection", confidence: 0.8 };
            }
        } catch (e) {
            return false;
        }

        return false;
    }

    // Inicia monitoramento apenas para desktop humano
    if (!botProtectionDisabled &amp;&amp; !isMobile) {
        devtoolsCheckInterval = setInterval(function() {
            if (!devtoolsOpen &amp;&amp; !protectionActivated) {
                const detection = detectDevTools();
                if (detection) {
                    console.log(`🔍 [VIVALOE] DevTools detectado via ${detection.method}`);
                    devtoolsOpen = true;
                    showProtection(`Inspeção Detectada (${detection.method})`);
                    clearInterval(devtoolsCheckInterval);
                }
            }
        }, 500); // Intervalo mais leve (500ms)

        // Para monitoramento após 45 segundos se não detectar nada
        setTimeout(() => {
            if (!devtoolsOpen &amp;&amp; !protectionActivated) {
                clearInterval(devtoolsCheckInterval);
                console.log("✅ [VIVALOE] Nenhum DevTools detectado - monitoramento pausado");
            }
        }, 45000);
    }

    // ===========================================
    // PROTEÇÃO CONTRA DEBUGGER E EVAL (DESKTOP)
    // ===========================================
    if (!botProtectionDisabled &amp;&amp; !isMobile) {
        try {
            // Protege console.log contra manipulação
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
            };

            // Intercepta apenas comandos suspeitos
            const protectedConsole = function(type) {
                return function(...args) {
                    // Detecta comandos de debug comuns
                    const message = args[0];
                    if (typeof message === 'string') {
                        const suspiciousPatterns = [
                            /devtools|inspect|debugger|console|chrome|firefox|network/,
                            /getelement|getelements|queryselector/,
                            /document|window|location|history/,
                            /cookie|localstorage|sessionstorage/
                        ];

                        if (suspiciousPatterns.some(pattern => pattern.test(message.toLowerCase()))) {
                            showProtection("Comando de Debug Detectado");
                            return;
                        }
                    }

                    return originalConsole[type].apply(console, args);
                };
            };

            console.log = protectedConsole('log');
            console.error = protectedConsole('error');
            console.warn = protectedConsole('warn');
            console.info = protectedConsole('info');

            // Protege eval e Function constructor
            const originalEval = window.eval;
            window.eval = function(code) {
                if (typeof code === 'string') {
                    const suspicious = /debugger|inspect|console|document|window|location/i.test(code);
                    if (suspicious) {
                        showProtection("Execução de Código Bloqueada");
                        return undefined;
                    }
                }
                return originalEval.apply(window, arguments);
            };

            // Protege setTimeout/setInterval contra injeção
            const originalSetTimeout = window.setTimeout;
            window.setTimeout = function(callback, delay) {
                if (typeof callback === 'string') {
                    if (/debugger|inspect|console|document/i.test(callback)) {
                        showProtection("Timer Suspeito Detectado");
                        return -1;
                    }
                }
                return originalSetTimeout.apply(window, arguments);
            };

        } catch (e) {
            // Se falhar, não quebra o site
            console.log("⚠️ [VIVALOE] Erro na proteção avançada:", e.message);
        }
    }

    // ===========================================
    // GESTOS TOUCH OTIMIZADOS PARA MOBILE
    // ===========================================
    if (isMobile &amp;&amp; !isBot) {
        // Permite todos os gestos normais
        document.addEventListener("touchstart", function(e) {
            // Bloqueia apenas gestos extremos (3+ dedos)
            if (e.touches.length > 2) {
                e.preventDefault();
                console.log("👆 [VIVALOE] Gesto multi-toque extremo bloqueado");
            }
        }, { passive: true });

        // Permite rolagem e zoom normais
        document.addEventListener("touchmove", function(e) {
            // Não interfere em gestos padrão do navegador
        }, { passive: true });

        // Monitora tentativas de download de imagem (toque longo)
        let touchStartTime = 0;
        let touchTarget = null;

        document.addEventListener("touchstart", function(e) {
            if (e.target.tagName === "IMG") {
                touchStartTime = Date.now();
                touchTarget = e.target;
            }
        }, { passive: true });

        document.addEventListener("touchend", function(e) {
            if (touchTarget &amp;&amp; touchTarget.tagName === "IMG") {
                const touchDuration = Date.now() - touchStartTime;
                if (touchDuration > 800) { // Toque longo > 800ms
                    console.log("📸 [VIVALOE] Tentativa de download de imagem detectada (mobile)");
                    // Pode adicionar watermark ou redirecionar para página de produto
                    touchTarget.style.opacity = "0.8";
                    setTimeout(() => {
                        touchTarget.style.opacity = "1";
                    }, 200);
                }
                touchTarget = null;
                touchStartTime = 0;
            }
        }, { passive: true });
    }

    // ===========================================
    // PROTEÇÃO CONTRA URL MANIPULAÇÃO
    // ===========================================
    function checkMaliciousURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const hash = window.location.hash;

        const suspiciousParams = ['devtools', 'inspect', 'debug', 'console', 'source', 'code', 'js'];
        const suspiciousHash = ['/devtools', '/inspect', '/debug', '/console'];

        if (suspiciousParams.some(param => urlParams.has(param)) || 
            suspiciousHash.some(h => hash.includes(h))) {

            if (!botProtectionDisabled &amp;&amp; !isMobile) {
                showProtection("URL Suspeita Detectada");
                return true;
            }
        }

        return false;
    }

    // Executa verificação de URL na inicialização
    if (checkMaliciousURL()) {
        console.log("🚫 [VIVALOE] URL maliciosa detectada e bloqueada");
    }

    // ===========================================
    // APLICAÇÃO DAS PROTEÇÕES
    // ===========================================
    function initializeProtections() {
        // Aplica proteção de seleção
        applySelectionProtection();

        // Protege imagens e mídia
        protectImages();

        // Adiciona proteção contra print screen (desktop)
        if (!botProtectionDisabled &amp;&amp; !isMobile) {
            document.addEventListener("keyup", function(e) {
                if (e.key === "PrintScreen" || e.key === "PrtSc") {
                    showProtection("Screenshot Detectado");
                }
            });
        }

        // Protege contra manipulação de DOM
        const observer = new MutationObserver(function(mutations) {
            if (botProtectionDisabled || isMobile) {
                return;
            }

            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' &amp;&amp; mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1 &amp;&amp; ( // Element node
                            node.tagName === 'SCRIPT' || 
                            node.tagName === 'STYLE' || 
                            (node.id &amp;&amp; node.id.includes('devtools'))
                        )) {
                            showProtection("Manipulação de DOM Detectada");
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Inicializa quando DOM estiver pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeProtections);
    } else {
        initializeProtections();
    }

    // ===========================================
    // OTIMIZAÇÕES DE PERFORMANCE
    // ===========================================
    // Remove intervalos desnecessários para bots e mobile
    if (botProtectionDisabled || isMobile) {
        // Não inicia monitoramento pesado
        console.log("⚡ [VIVALOE] Modo performance otimizado ativo");
    }

    // Monitora performance de carregamento
    if ('performance' in window &amp;&amp; performance.getEntriesByType) {
        window.addEventListener('load', function() {
            const entries = performance.getEntriesByType('navigation');
            if (entries.length > 0) {
                const navEntry = entries[0];
                const loadTime = Math.round(navEntry.loadEventEnd - navEntry.navigationStart);

                if (!isBot) {
                    console.log(`⚡ [VIVALOE] Carregamento completo em ${loadTime}ms`);
                    console.log(`📊 Modo: ${isMobile ? 'Mobile' : 'Desktop'} | Proteção: ${botProtectionDisabled ? 'Mínima (SEO)' : 'Completa'}`);
                }
            }
        });
    }

    // ===========================================
    // FINALIZAÇÃO E LOGS DE STATUS
    // ===========================================
    setTimeout(function() {
        if (!protectionActivated &amp;&amp; !devtoolsOpen) {
            if (!isBot) {
                console.log("✅ [VIVALOE] Sistema de proteção inicializado com sucesso!");
                console.log("🔒 Status:", {
                    modo: isMobile ? "Mobile (Livre)" : "Desktop (Protegido)",
                    seo: botProtectionDisabled ? "Transparente para bots" : "Humano detectado",
                    imagens: "Protegidas",
                    devtools: !isMobile ? "Monitoramento ativo" : "Desabilitado"
                });

                // Mensagem de boas-vindas discreta
                console.log("%c🌿 VIVALOE - Proteção Avançada Ativa", "color: #10b981; font-size: 14px; font-weight: bold;");
                console.log("%cPara mais informações: https://vivaloe.netlify.app", "color: #4a5568; font-size: 12px;");
            }
        }
    }, 1500);

    // Cleanup ao sair da página
    window.addEventListener('beforeunload', function() {
        if (devtoolsCheckInterval) {
            clearInterval(devtoolsCheckInterval);
        }
    });

    // ===========================================
    // EXPORTA FUNÇÕES PARA DEBUG (DESENVOLVIMENTO)
    // ===========================================
    if (window.location.hostname.includes('localhost') || window.location.hostname.includes('dev')) {
        window.VivaloeProtect = {
            isMobile: () => isMobile,
            isBot: () => isBot,
            protectionActive: () => protectionActivated,
            disableProtection: () => { botProtectionDisabled = true; console.log("🛡️ [DEV] Proteção desabilitada"); },
            enableProtection: () => { botProtectionDisabled = false; console.log("
