describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should not add a new server name to the results when empty", function () {
    serverNameInput.value = ""
    submitServerInfo()
    expect(Object.keys(allServers).length).toEqual(0);
  })
  it('should show all info on updateServerTable', function () {
    submitServerInfo();
    updateServerTable();

    let listAll = document.querySelectorAll('#serverTable tbody tr td');

    expect(listAll.length).toEqual(3);
  })
  it("should gen a delete button to tr on appendDeleteBtn()", function () {
    let testTr = document.createElement('tr')
    appendDeleteBtn(testTr);
    expect(testTr.children.length).toEqual(1)
    expect(testTr.firstChild.innerHTML).toEqual("X")
  })
  afterEach(function () {
    // teardown logic
    serverTbody.innerHTML = ""
    allServers = {};
    serverId = 0;
  });
});
