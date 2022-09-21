describe('Payments test with setup and tear-down', function () {
    beforeEach(function () {
        tipAmtInput.value = 20;
        billAmtInput.value = 200;
    })
    it('should add curPayment to allPayments using submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments["payment1"].billAmt).toEqual('200')
        expect(allPayments["payment1"].tipAmt).toEqual('20')
    })
    it('should not add a new payment on submitPaymentInfo() with no input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });
    it("should create a new payment with createCurPayment", function () {
        let payment = { billAmt: '200', tipAmt: '20', tipPercent: 10 }
        expect(createCurPayment()).toEqual(payment)
    })
    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });
    afterEach(function () {
        tipAmtInput.value = ""
        billAmtInput.value = ""
        paymentId = 0;
        allPayments = {}
    })
})