const styles = {
  container: {
    
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 80,
    textAlign: 'center',
    color: '#f6e698'
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Wellcome to <br/> Phonebook
      </h1>
    </div>
  );
}
