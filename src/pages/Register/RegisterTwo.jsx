function RegisterTwo() {
  return (
    <div className="form-container">
      <h2>Masuk</h2>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Masuk</button>
        <hr />
        <p>Belum punya akun?</p> <a href="">Daftar Sekarang</a>
      </form>
    </div>
  );
}

export default RegisterTwo;
