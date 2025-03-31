function Home() {
  return (
    <section className="hero">
      <h2>Witamy w VitaVoice</h2>
      <p>Jesteśmy kobiecym klubem wokalnym, który łączy pasję do śpiewu i wspólnoty. Dołącz do nas!</p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="/kontakt" className="btn btn-primary">Skontaktuj się z nami</a>
        <a href="/o-nas" className="btn btn-outline">Dowiedz się więcej</a>
      </div>
    </section>
  );
  }
  
  export default Home;