import "./testaccounts.scss";

export default function TestAccounts() {
  return (
    <>
    <section className="testaccounts">
        <div className="container">
        <div className="row">
          <h4 className='text-center'>Test Accounts</h4>
          <table className="account__table">
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
            <tr>
              <td>admin@admin.com</td>
              <td>admin1234</td>
              <td>admin</td>
            </tr>
            <tr>
              <td>test@test.com</td>
              <td>test1234</td>
              <td>user</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
      
    </>
  );
}
