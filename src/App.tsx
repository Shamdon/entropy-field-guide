import { useEffect, useMemo, useState } from "react";

const sections = [
  ["intuition", "Intuition"], ["surprise", "Surprise"], ["entropy", "Entropy"],
  ["context", "Context"], ["compression", "Compression"], ["cross-entropy", "Cross-entropy"],
  ["ai", "AI models"], ["advanced", "Advanced atlas"], ["frontier", "Research frontier"],
];

const log2 = (value: number) => Math.log(value) / Math.log(2);
const entropy = (p: number) => p === 0 || p === 1 ? 0 : -p * log2(p) - (1 - p) * log2(1 - p);
const surprise = (p: number) => p === 0 ? Infinity : -log2(p);
const formatBits = (value: number) => !Number.isFinite(value) ? "∞" : value < 10 ? value.toFixed(3) : value.toFixed(1);

function Equation({ children, label }: { children: React.ReactNode; label: string }) {
  return <figure className="equation"><div>{children}</div><figcaption>{label}</figcaption></figure>;
}

function EntropyLab() {
  const [heads, setHeads] = useState(50);
  const p = heads / 100;
  const h = entropy(p);
  return (
    <div className="lab" aria-labelledby="lab-title">
      <div className="lab-head">
        <div><span className="eyebrow inverse">Interactive experiment 01</span><h3 id="lab-title">Move the probability. Watch uncertainty change.</h3></div>
        <div className="live-value" aria-live="polite"><strong>{h.toFixed(3)}</strong><span>bits / toss</span></div>
      </div>
      <div className="lab-controls">
        <label htmlFor="heads-probability">Probability of heads <output>{heads}%</output></label>
        <input id="heads-probability" type="range" min="0" max="100" value={heads} onChange={(e) => setHeads(Number(e.target.value))} aria-describedby="lab-explanation" />
        <div className="probability-track" aria-hidden="true"><span style={{width:`${heads}%`}}>H</span><span style={{width:`${100-heads}%`}}>T</span></div>
      </div>
      <div className="lab-grid">
        <div className="lab-metric"><span>Heads occurs</span><strong>{heads}%</strong><small>surprise: {formatBits(surprise(p))} bits</small></div>
        <div className="lab-metric"><span>Tails occurs</span><strong>{100-heads}%</strong><small>surprise: {formatBits(surprise(1-p))} bits</small></div>
        <div className="lab-metric accent"><span>Average surprise</span><strong>{h.toFixed(3)}</strong><small>this is the entropy</small></div>
      </div>
      <p id="lab-explanation" className="lab-note">A fair coin is hardest to predict and reaches 1 bit per toss. As one outcome becomes nearly certain, average surprise approaches zero.</p>
    </div>
  );
}

function CrossEntropyLab() {
  const [guess, setGuess] = useState(50);
  const p = .8, q = Math.min(.999, Math.max(.001, guess/100));
  const source = entropy(p), cross = -p*log2(q)-(1-p)*log2(1-q), penalty = cross-source;
  return (
    <div className="model-lab">
      <div className="model-lab-copy">
        <span className="eyebrow">Interactive experiment 02</span><h3>The source stays fixed. Only the model moves.</h3>
        <p>The underlying source produces heads 80% of the time. Adjust what the model believes. A mismatched model costs extra bits.</p>
        <label htmlFor="model-probability">Model probability for heads <output>{guess}%</output></label>
        <input id="model-probability" type="range" min="1" max="99" value={guess} onChange={(e)=>setGuess(Number(e.target.value))} />
      </div>
      <div className="decomposition" aria-live="polite">
        <div><span>Irreducible entropy</span><strong>{source.toFixed(3)}</strong><small>H(P)</small></div><b>+</b>
        <div className={penalty < .001 ? "matched" : ""}><span>Model penalty</span><strong>{penalty.toFixed(3)}</strong><small>D<sub>KL</sub>(P‖Q)</small></div><b>=</b>
        <div><span>Expected average cost</span><strong>{cross.toFixed(3)}</strong><small>H(P,Q)</small></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("intuition");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, {rootMargin:"-15% 0px -65% 0px", threshold:[0,.2,.5]});
    sections.forEach(([id])=>{const el=document.getElementById(id); if(el) observer.observe(el);});
    return ()=>observer.disconnect();
  }, []);
  const progress = useMemo(()=>((sections.findIndex(([id])=>id===active)+1)/sections.length)*100,[active]);
  const goTo=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenuOpen(false);};

  return <main>
    <header className="site-header">
      <button className="brand" onClick={()=>goTo("top")} aria-label="Back to top"><span className="brand-mark">H</span><span>Entropy<br/>Field Guide</span></button>
      <div className="header-meta"><span>Information Theory / AI</span><span>Field note 001</span><span>12·08·2026</span></div>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">{menuOpen?"Close":"Index"}</button>
      <div className="progress" aria-hidden="true"><span style={{width:`${progress}%`}}/></div>
    </header>
    <nav id="site-nav" className={menuOpen?"site-nav open":"site-nav"} aria-label="Learning path">
      <span className="nav-label">Learning path</span>
      {sections.map(([id,label],i)=><button key={id} className={active===id?"active":""} onClick={()=>goTo(id)}><span>{String(i+1).padStart(2,"0")}</span>{label}</button>)}
    </nav>

    <div className="page-shell">
      <section className="hero" id="top">
        <div className="hero-kicker"><span>From intuition to formalism</span><span>Reading time · 24 minutes</span></div>
        <h1>How much<br/>surprise<br/>is inside?</h1>
        <div className="hero-aside"><p className="lead">Entropy measures expected uncertainty before an outcome; surprisal measures the information conveyed by the outcome that occurs.</p><p>Begin with a coin. End with the mathematics connecting prediction, compression, and large language models.</p><button className="text-link" onClick={()=>goTo("intuition")}>Begin at zero <span>↓</span></button></div>
        <div className="hero-graphic" aria-label="A probability field moving from order to uncertainty">{Array.from({length:64}).map((_,i)=><span key={i} style={{opacity:.08+((i*17)%91)/100}}/>)}</div>
      </section>

      <section className="chapter" id="intuition"><div className="chapter-index">01</div><div className="chapter-content">
        <span className="eyebrow">The intuition</span><h2>Entropy is the average amount of surprise.</h2>
        <p className="intro">Imagine opening two boxes. The first always contains a white ball. The second contains a white or black ball, chosen with equal probability. Opening the first tells you nothing new. Opening the second resolves real uncertainty. The second box has more entropy.</p>
        <div className="box-example">
          <article><div className="ball-row certain" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div><span>Box A · predictable</span><strong>0 bits</strong><p>The outcome was already known.</p></article>
          <article><div className="ball-row uncertain" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div><span>Box B · uncertain</span><strong>1 bit</strong><p>One fair binary choice must be resolved.</p></article>
        </div>
        <div className="callout"><span className="callout-mark">i</span><p><strong>Entropy is measured before you look.</strong> Once the ball is revealed, uncertainty is gone. Information is what the observation supplies by removing that uncertainty.</p></div>
      </div></section>

      <section className="chapter" id="surprise"><div className="chapter-index">02</div><div className="chapter-content">
        <span className="eyebrow">One event at a time</span><h2>Rare events carry more information.</h2>
        <p className="intro">An event is informative when it was difficult to predict. Information theory gives this intuition an exact scale called <em>surprisal</em>.</p>
        <Equation label="Self-information, or surprisal, of outcome x">I(x) = −log<sub>2</sub> p(x)</Equation>
        <div className="surprise-scale">
          <article><span className="fraction">1 / 2</span><div className="bit-cells"><i/></div><strong>1 bit</strong><p>A fair coin result.</p></article>
          <article><span className="fraction">1 / 4</span><div className="bit-cells"><i/><i/></div><strong>2 bits</strong><p>One of four equal options.</p></article>
          <article><span className="fraction">1 / 1,024</span><div className="bit-cells ten">{Array.from({length:10}).map((_,i)=><i key={i}/>)}</div><strong>10 bits</strong><p>A one-in-1,024 event.</p></article>
        </div>
        <div className="prose-grid"><h3>Why a logarithm?</h3><div><p>Independent surprises should add. Two fair coin tosses have four equally likely outcomes: each complete outcome costs 2 bits. The logarithm converts multiplied probabilities into added information.</p><p className="mini-equation">−log₂(p₁ × p₂) = −log₂ p₁ − log₂ p₂</p></div></div>
      </div></section>

      <section className="chapter dark-band" id="entropy"><div className="chapter-index">03</div><div className="chapter-content">
        <span className="eyebrow inverse">From one event to a source</span><h2>Entropy averages every possible surprise.</h2>
        <p className="intro">A source can produce several outcomes. Shannon entropy weights the surprisal of each outcome by how often that outcome occurs.</p>
        <Equation label="Shannon entropy of a discrete random variable X">H(X) = −Σ<sub>x</sub> p(x) log<sub>2</sub> p(x)</Equation>
        <EntropyLab/>
        <div className="three-rules">
          <article><span>01</span><h3>Certainty has zero entropy</h3><p>If one outcome has probability 1, observing it communicates nothing new.</p></article>
          <article><span>02</span><h3>Balance maximizes entropy</h3><p>Among a fixed number of possibilities, equal probabilities are hardest to predict.</p></article>
          <article><span>03</span><h3>Entropy is an expectation</h3><p>It describes a source on average, not the surprise of one observed event.</p></article>
        </div>
      </div></section>

      <section className="chapter" id="context"><div className="chapter-index">04</div><div className="chapter-content">
        <span className="eyebrow">Conditional entropy</span><h2>What you already know changes what remains uncertain.</h2>
        <p className="intro">The uncertainty relevant to prediction depends on what is already known. The next letter in an unknown sentence is uncertain. After reading “information theor”, it becomes much easier to predict.</p>
        <div className="context-demo"><div><span>Without context</span><p>_</p><small>Many plausible symbols</small></div><div className="context-arrow">→</div><div><span>With context</span><p>information theor<span>_</span></p><small>“y” receives most probability</small></div></div>
        <Equation label="The uncertainty in X that remains after Y is known">H(X | Y) = H(X,Y) − H(Y)</Equation>
        <div className="concept-split"><div><h3>Context can lower conditional entropy.</h3><p>It changes the prediction problem by adding side information. Syntax, earlier tokens, a dictionary, another sensor, or the previous video frame can all remove uncertainty about what comes next.</p></div><div className="formula-stack"><span>More context</span><b>↓</b><span>Less uncertainty</span><b>↓</b><span>Shorter ideal code</span></div></div>
      </div></section>

      <section className="chapter" id="compression"><div className="chapter-index">05</div><div className="chapter-content">
        <span className="eyebrow">Prediction becomes code</span><h2>Entropy coding translates probabilities into bits.</h2>
        <p className="intro">In the model–coder decomposition used here, the entropy coder does not discover patterns. A predictor assigns probabilities; arithmetic coding, range coding, and ANS convert those probabilities into a near-minimal bitstream.</p>
        <div className="pipeline" aria-label="Compression pipeline">
          <article><span>01</span><strong>Context</strong><small>What has already been decoded</small></article><i/>
          <article><span>02</span><strong>Predictor</strong><small>Probability of every next symbol</small></article><i/>
          <article><span>03</span><strong>Entropy coder</strong><small>Probabilities converted to bits</small></article><i/>
          <article><span>04</span><strong>Exact data</strong><small>Recovered without alteration</small></article>
        </div>
        <Equation label="Ideal code length under an autoregressive model q">L<sub>q</sub>(x₁:ₙ) ≈ Σ<sub>t=1</sub><sup>n</sup> −log<sub>2</sub> q(x<sub>t</sub> | x&lt;t)</Equation>
        <div className="definition-grid"><article><span>Known probabilities</span><h3>Entropy coding is near-optimal.</h3><p>Modern entropy coders approach the model-assigned ideal codelength with only small finite-length and implementation overhead.</p></article><article><span>Unknown source</span><h3>Modeling remains open.</h3><p>The harder problem is estimating probabilities that match new data, including long-range structure.</p></article></div>
        <blockquote><p>Every prediction is a bet paid for in bits.</p><cite>An operational reading of log loss</cite></blockquote>
      </div></section>

      <section className="chapter soft-band" id="cross-entropy"><div className="chapter-index">06</div><div className="chapter-content">
        <span className="eyebrow">The model can be wrong</span><h2>Cross-entropy is the bill for using your model.</h2>
        <p className="intro">The source has a true but usually unknown distribution P. A model uses an approximation Q. Cross-entropy measures average bits spent when data comes from P but the code is designed using Q.</p>
        <Equation label="Cross-entropy separates irreducible uncertainty from modeling error">H(P,Q) = H(P) + D<sub>KL</sub>(P ‖ Q)</Equation>
        <CrossEntropyLab/>
        <div className="terms-table">
          <div><span>H(P)</span><strong>Source entropy</strong><p>Uncertainty that remains even with the correct distribution.</p></div>
          <div><span>D<sub>KL</sub>(P‖Q)</span><strong>Divergence penalty</strong><p>Extra bits caused by the model assigning wrong probabilities.</p></div>
          <div><span>H(P,Q)</span><strong>Cross-entropy</strong><p>Total expected codelength obtained with the model.</p></div>
        </div>
        <div className="precision-note"><strong>The precise correction</strong><p>A better model does not “make the source entropy smaller.” For a fixed source and conditions, it reduces the KL penalty and moves cross-entropy closer to entropy.</p></div>
      </div></section>

      <section className="chapter" id="ai"><div className="chapter-index">07</div><div className="chapter-content">
        <span className="eyebrow">Language models</span><h2>An LLM is a probability model before it is a chatbot.</h2>
        <p className="intro">During pretraining, an autoregressive language model repeatedly sees a context and assigns probabilities to the next token. Empirical cross-entropy loss penalizes the model according to the probability it assigned to the token that actually appeared.</p>
        <div className="token-demo"><div className="token-context"><span>The laboratory measured the</span></div><div className="token-predictions">
          <div><span>temperature</span><i style={{width:"72%"}}/><b>0.72</b></div><div><span>signal</span><i style={{width:"15%"}}/><b>0.15</b></div><div><span>sample</span><i style={{width:"8%"}}/><b>0.08</b></div><div><span>other</span><i style={{width:"5%"}}/><b>0.05</b></div>
        </div></div>
        <div className="ai-grid">
          <article><span className="glyph">CE</span><h3>Training objective</h3><p>Minimize negative log-likelihood: the same quantity that determines ideal code length.</p></article>
          <article><span className="glyph">PPL</span><h3>Perplexity</h3><p>If loss is measured in bits per token, perplexity is 2 raised to that loss. It can be read as an effective number of equally likely choices.</p></article>
          <article><span className="glyph">B/T</span><h3>Tokenization caveat</h3><p>Bits per token cannot fairly compare different tokenizers. On the same byte-encoded dataset, bits per byte is typically more comparable.</p></article>
          <article><span className="glyph">≡</span><h3>Exact decoding</h3><p>Encoder and decoder must reproduce the same quantized probability distribution at every step. One discrepancy can corrupt the stream.</p></article>
        </div>
        <div className="myth"><span>Important boundary</span><h3>Compression is evidence of captured regularity—not proof of understanding.</h3><p>Memorization, surface correlations, and causal structure can all improve prediction. Compression alone does not distinguish among them. Evaluation must use genuinely unseen data and account for contamination, model cost, and side information.</p></div>
      </div></section>

      <section className="chapter advanced-band" id="advanced"><div className="chapter-index">08</div><div className="chapter-content">
        <span className="eyebrow inverse">Advanced atlas</span><h2>The surrounding concepts, in one connected map.</h2>
        <p className="intro">These quantities answer different questions. They should not be collapsed into a single informal notion of “information.”</p>
        <div className="atlas">
          <article><span>H(X,Y)</span><h3>Joint entropy</h3><p>How uncertain two variables are together.</p><code>H(X,Y)=H(X)+H(Y|X)</code></article>
          <article><span>H(X|Y)</span><h3>Conditional entropy</h3><p>What remains unknown about X after Y is observed.</p><code>H(X|Y)≤H(X)</code></article>
          <article><span>I(X;Y)</span><h3>Mutual information</h3><p>How many bits knowing Y saves when describing X.</p><code>I(X;Y)=H(X)−H(X|Y)</code></article>
          <article><span>D<sub>KL</sub></span><h3>KL divergence</h3><p>Expected excess log loss from using Q when P generates data.</p><code>D<sub>KL</sub>(P‖Q)≥0</code></article>
          <article><span>R(D)</span><h3>Rate–distortion</h3><p>Minimum rate when some controlled loss is permitted.</p><code>lossy, not lossless</code></article>
          <article><span>MDL</span><h3>Minimum description length</h3><p>Balances model complexity against unexplained residual data.</p><code>L(model)+L(data|model)</code></article>
          <article><span>K(x)</span><h3>Kolmogorov complexity</h3><p>Length of the shortest program that outputs one exact object; uncomputable in general.</p><code>individual sequences</code></article>
          <article><span>h(X)</span><h3>Differential entropy</h3><p>A continuous analogue that can be negative and depends on the chosen units and coordinates.</p><code>continuous variables</code></article>
        </div>
        <div className="chain-rule"><span className="eyebrow inverse">The chain rule</span><p>H(X₁,…,Xₙ) = Σ H(X<sub>t</sub> | X&lt;t)</p><small>The joint entropy of a sequence is the sum of the uncertainty remaining in each symbol after everything before it is known. This is the bridge to autoregressive models.</small></div>
        <div className="caveats"><h3>Four boundaries worth keeping</h3><ol>
          <li><span>01</span><p><strong>Representation matters.</strong> The reported bits-per-token rate changes when tokenization changes.</p></li>
          <li><span>02</span><p><strong>Conditions matter.</strong> Context, dictionaries, and pretrained weights are side information only when they are available to both encoder and decoder.</p></li>
          <li><span>03</span><p><strong>Average is not individual.</strong> Entropy describes a distribution; surprisal describes an outcome.</p></li>
          <li><span>04</span><p><strong>Dependence is not causation.</strong> Mutual information measures statistical dependence, not causal direction.</p></li>
        </ol></div>
      </div></section>

      <section className="chapter" id="frontier"><div className="chapter-index">09</div><div className="chapter-content">
        <span className="eyebrow">Research frontier · August 2026</span><h2>The predictor is improving. The system cost remains.</h2>
        <p className="intro">Recent work supports the prediction–compression equivalence while exposing the engineering and scientific qualifications around it.</p>
        <div className="research-list">
          <article><time>2024</time><div><h3>Foundation models cross modalities</h3><p><em>Language Modeling Is Compression</em> paired pretrained language models with arithmetic coding to compress text, image patches, and audio samples losslessly. Its headline ratios treat model weights as shared side information.</p></div><a href="https://deepmind.google/research/publications/39768/" target="_blank" rel="noreferrer">Primary paper ↗</a></article>
          <article><time>2025</time><div><h3>Hybrid prediction handles domain shift</h3><p>A weighted product of experts combined a pretrained neural model with a universal compressor at test time, targeting performance no worse than the better component.</p></div><a href="https://aclanthology.org/2025.findings-emnlp.110/" target="_blank" rel="noreferrer">ACL paper ↗</a></article>
          <article><time>MAR 2026</time><div><h3>Multilingual evidence adds a warning</h3><p>In one evaluation, Llama 3.2 1B was substantially outperformed by classical baselines on the tested non-English and unstructured text. A strong prior is not universal.</p></div><a href="https://aclanthology.org/2026.eacl-srw.16.pdf" target="_blank" rel="noreferrer">EACL workshop ↗</a></article>
          <article className="latest"><time>JUL 2026</time><div><h3>Bounded ranking improves source-code compression</h3><p>A preprint evaluating 30 models found that, for most models, 95–98% of correct code tokens appeared among the top 63 predictions. Thresholding improved both compression and throughput over unbounded ranking, but the LLM pipelines remained one to two orders of magnitude slower than general-purpose compressors.</p></div><a href="https://arxiv.org/html/2607.24192v2" target="_blank" rel="noreferrer">Latest preprint ↗</a></article>
        </div>
        <div className="open-problems"><span className="eyebrow">Open problems</span><ul>
          <li>Strong long-range predictions without full autoregressive inference cost.</li><li>Deterministic decoding across hardware and software stacks.</li><li>Total description length when model weights are not already shared.</li><li>Separating generalized structure from memorization and contamination.</li><li>Turning residual bit costs into detectors of novelty, shift, and hidden structure.</li>
        </ul></div>
      </div></section>

      <section className="closing"><span className="eyebrow">The one-sentence model</span><p>Entropy is the irreducible average surprise left once specified side information is known; lossless compression pays for that surprise in bits, and learning searches for predictive structure so recurring regularities need not be encoded from scratch.</p><button className="text-link" onClick={()=>goTo("top")}>Return to the beginning <span>↑</span></button></section>
      <footer><div className="footer-brand"><span>H</span><strong>Entropy Field Guide</strong></div><div><span>Discipline</span><p>Information theory<br/>Statistical learning<br/>Lossless compression</p></div><div><span>Method</span><p>Intuition → formalism<br/>Prediction → code<br/>Claims → evidence</p></div><div><span>Edition</span><p>Field note 001<br/>12 August 2026<br/>Primary sources linked above</p></div></footer>
    </div>
  </main>;
}
