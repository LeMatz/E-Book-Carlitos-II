import React, { useState } from 'react';
import { Sparkles, X, Send, BookOpen, RefreshCw } from 'lucide-react';
import { ArgentineMateIcon, AntiqueCompassIcon, IChingCoinsIcon } from '../VintageSvgIcons';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface Message {
  sender: 'user' | 'carlitos';
  text: string;
}

interface CarlitosAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPageTitle?: string;
  currentPageNumber?: number;
}

export const CarlitosAiModal: React.FC<CarlitosAiModalProps> = ({
  isOpen,
  onClose,
  currentPageTitle,
  currentPageNumber,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'carlitos',
      text: `¡Qué hacés, che! Me alegra encontrarte en el folio ${currentPageNumber || 1}. Acabo de poner la pava sobre el fuego y tengo el mate listo. Decime: ¿qué duda tenés sobre tus sueños, alguna sincronicidad que te sacudió, las tres monedas del I Ching o la danza entre tu Ánima y tu Sombra? Charlémoslo como amigos.`,
    },
  ]);

  if (!isOpen) return null;

  const sampleQuestions = [
    '¿Cómo reconozco una sincronicidad real?',
    '¿Qué me dice un sueño en sus cuatro actos?',
    '¿Cómo interpretar el hexagrama que me salió en el I Ching?',
    '¿Cómo rescato mi Sombra Dorada?',
  ];

  const handleSend = async (queryToSend?: string) => {
    const text = (queryToSend || inputQuery).trim();
    if (!text || loading) return;

    const userMsg: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryToSend) setInputQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/carlitos-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          pageContext: `El lector está actualmente en el folio ${currentPageNumber}: ${currentPageTitle}`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setMessages((prev) => [...prev, { sender: 'carlitos', text: data.reply }]);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      // Fallback to intelligent local response engine below
    }

    // Local Jungian Carlitos Engine Fallback for Volume II topics
    setTimeout(() => {
      let carlitosReply = '';
      const lower = text.toLowerCase();

      if (lower.includes('sincron') || lower.includes('coincidencia') || lower.includes('escarabajo')) {
        carlitosReply =
          'Mirá, che: la sincronicidad es el guiño del Unus Mundus. No te rompas la cabeza buscando una causa mecánica de quién empujó a quién. Cuando un evento físico exterior coincide de forma sobrecogedora con lo que te está pasando adentro en el alma, la realidad te está diciendo: "no estás solo en el camino". Guardá silencio, agradecé y preguntate qué decisión ética te pide tomar.';
      } else if (lower.includes('i ching') || lower.includes('hexagrama') || lower.includes('moneda')) {
        carlitosReply =
          'El I Ching no es una bola de cristal para adivinar el futuro, sino un espejo de agua donde tu inconsciente se mira de frente. Las tres monedas de bronce atrapan el estado de la energía cósmica y psíquica en el segundo exacto de la tirada. Leé el dictamen con humildad, mirá las líneas mutantes como tus puntos de tensión, y no vuelvas a preguntar lo mismo dos veces por capricho del ego.';
      } else if (lower.includes('sombra') || lower.includes('dorada')) {
        carlitosReply =
          'La Sombra Dorada es el oro puro que dejaste enterrado en el patio trasero de tu vida por miedo a brillar demasiado. Si alguien te fascina tanto que te sentís diminuto a su lado, esa persona es tu espejo: te está prestando la imagen de un talento o una audacia que vos mismo tenés que reclamar. ¡Dejá de aplaudir en las gradas y subite al escenario!';
      } else if (lower.includes('sueño') || lower.includes('sueños') || lower.includes('soñé')) {
        carlitosReply =
          'Tu sueño no viene con ganas de complicarte la vida; es un cuadro en cuatro actos (planteo, nudo, peripeteia y lysis). Prestale atención especial a la Lysis (el final): ahí está la compensación que tu mente profunda te regala para equilibrar la soberbia o el miedo de tu día consciente. No busques en un diccionario barato: preguntate qué te hace sentir esa imagen a vos.';
      } else if (lower.includes('ánima') || lower.includes('ánimus') || lower.includes('pareja') || lower.includes('enamor')) {
        carlitosReply =
          'El gran peligro del amor es proyectarle al otro nuestra propia figura contrasexual interior. Cuando te enamoras ciegamente, estás enamorado de tu propia Ánima o tu propio Ánimus reflejado en el otro. El amor maduro empieza cuando sos capaz de retirar ese traje de princesa o de héroe y amar a la persona de carne y hueso con sus límites y su humanidad.';
      } else if (lower.includes('senex') || lower.includes('puer')) {
        carlitosReply =
          'El Puer quiere volar hasta el sol sin ensuciarse con las piedras de la tierra; el Senex construye murallas frías pero se olvida del entusiasmo. La alquimia de la vida consiste en hacerlos amigos: dale a tu niño interior la disciplina del anciano para que sus sueños aterricen, y dale al anciano la risa del niño para que no se vuelva una tumba de piedra.';
      } else {
        carlitosReply = `Qué buena pregunta me hacés mientras cebo otro mate. Respecto a "${text}", acordate siempre de esto: en el camino del autoconocimiento no hay respuestas de manual. Lo que te pasa no es un error de fábrica de tu mente; es la energía de un arquetipo buscando integrar los opuestos en tu interior. Escuchá lo que te incomoda, porque ahí es donde la vida quiere que crezcas.`;
      }

      setMessages((prev) => [...prev, { sender: 'carlitos', text: carlitosReply }]);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#17120d]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#dfcea6] border-4 border-[#5a4022] w-full max-w-2xl p-4 sm:p-7 shadow-2xl relative paper-card max-h-[92vh] flex flex-col rounded-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#5a4022]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#17120d] text-[#d4af37] border border-[#aa8032] rounded-xs shadow-xs">
              <ArgentineMateIcon className="w-7 h-7 text-[#d4af37]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#8f6e28] font-bold tracking-widest">
                Diálogo en el Estudio de Küsnacht
              </span>
              <h2 className="font-playfair text-xl sm:text-2xl font-black text-[#17120d] uppercase ink-text">
                Carlitos responde
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#17120d] hover:text-[#ebdcb8] text-[#17120d] transition-all cursor-pointer border border-[#5a4022] rounded-xs"
            title="Cerrar diálogo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Context Pill Banner */}
        <div className="my-2.5 px-3 py-1.5 bg-[#ebdcb8] border border-[#5a4022]/40 text-xs font-mono text-[#5a4022] flex items-center justify-between rounded-xs">
          <span>
            ✦ Contexto: Folio {currentPageNumber || 1} • {currentPageTitle || 'Estudio General'}
          </span>
          <span className="text-[#8f6e28] italic hidden sm:inline">Mate cebado & leña encendida</span>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto space-y-4 my-2 p-3 bg-[#ebdcb9] border-2 border-[#5a4022]/50 rounded-xs min-h-[260px] max-h-[380px] shadow-inner font-old-standard">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'carlitos' && (
                <div className="p-1 bg-[#17120d] text-[#d4af37] border border-[#aa8032] rounded-xs shrink-0 mt-0.5">
                  <ArgentineMateIcon className="w-4 h-4 text-[#d4af37]" />
                </div>
              )}

              <div
                className={`p-3.5 max-w-[85%] rounded-xs text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#17120d] text-[#ebdcb8] border border-[#aa8032] shadow-xs'
                    : 'bg-[#f2e6cb] text-[#17120d] border border-[#5a4022]/40 shadow-xs'
                }`}
              >
                <div className="font-playfair font-bold text-[11px] mb-1 uppercase tracking-wider text-[#8f6e28]">
                  {msg.sender === 'user' ? 'Vos' : 'Carlitos'}
                </div>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#8f6e28] italic p-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#d4af37]" />
              <span>Carlitos le da un sorbo al mate y piensa en tu respuesta...</span>
            </div>
          )}
        </div>

        {/* Quick Sample Questions */}
        <div className="my-1.5 flex flex-wrap gap-1.5">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] font-mono px-2 py-1 bg-[#ebdcb8] hover:bg-[#dfcea6] text-[#17120d] border border-[#5a4022]/40 rounded-xs transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-2 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Preguntale a Carlitos sobre tus sueños, sincronías o arquetipos..."
            className="flex-1 p-2.5 bg-[#f2e6cb] border-2 border-[#5a4022] font-old-standard text-xs sm:text-sm text-[#17120d] placeholder:text-[#8f6e28]/60 focus:outline-none focus:border-[#aa8032] rounded-xs shadow-inner"
          />

          <button
            onClick={() => handleSend()}
            disabled={loading || !inputQuery.trim()}
            className="px-4 py-2.5 bg-[#17120d] hover:bg-[#2b1f16] text-[#d4af37] border border-[#aa8032] font-playfair font-bold text-xs uppercase flex items-center gap-1.5 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-all rounded-xs shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Enviar</span>
          </button>
        </div>

      </div>
    </div>
  );
};
