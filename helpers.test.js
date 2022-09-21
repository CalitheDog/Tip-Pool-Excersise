describe('Tests, with setup and tear-down', function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    })

    it('should add total tip amount on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(40)
    })

    it("should calculate tipPercent with sumPaymentTotal()", function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(10)
        billAmtInput.value = 80;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(60)

    })
    it('should gen new td from appendTD(tr,value)', function () {
        let newTr = document.createElement('tr')
        appendTd(newTr, "test1");
        expect(newTr.children.length).toEqual(1);

    })
    it('should calculate tipPercent with single values', function () {
        expect(calculateTipPercent(100, 40)).toEqual(40);
        expect(calculateTipPercent(50, 10)).toEqual(20);
    })
    afterEach(function () {
        paymentId = 0;
        allPayments = {};
        billAmtInput.value = ""
        tipAmtInput.value = ""
        paymentTbody.innerHtml = ""

    })
})