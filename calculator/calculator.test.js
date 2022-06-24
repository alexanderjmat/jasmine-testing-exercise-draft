
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: '1000', years: '1', rate: '0.12'})).toEqual('88.85')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: '90006', years: '2', rate: '0.1'})).toEqual('4153.32')
});

/// etc
