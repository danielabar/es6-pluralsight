describe('Numbers', () => {

  it('supports octal literals', () => {
    var myOctal = 0o71;
    expect(myOctal).toEqual(57);
  });

  it('supports binary literals', () => {
    var myBin = 0b1101;
    expect(myBin).toEqual(13);
  });

  it('Parses octal values with Number function', () => {
    var octNum = Number('0o71');
    expect(octNum).toEqual(57);
  });

  it('Parses binary values with Number function', () => {
    var binNum = Number('0b101');
    expect(binNum).toEqual(5);
  });

  it('Exposes parseInt and parseFloat', () => {
    // Improvement over parseInt and parseFloat being on the global scope
    expect(Number.parseInt('3')).toEqual(3);
    expect(Number.parseFloat('3.5')).toEqual(3.5);
  });

  it('Does not convert strings when calling Number.isFinite vs global', () => {
    expect(isFinite('1')).toBe(true);
    expect(Number.isFinite('1')).toBe(false);
  });

  it('Does not convert strings when calling Number.isNaN vs global', () => {
    expect(isNaN('NaN')).toBe(true);
    expect(Number.isNaN('NaN')).toBe(false);
  });

  it('Correctly detects integers with isInteger', () => {
    expect(Number.isInteger(1)).toBe(true);
    expect(Number.isInteger(1.0)).toBe(true);
    expect(Number.isInteger('1')).toBe(false);
    expect(Number.isInteger(1.5)).toBe(false);
  });

  it('Exposes max and min safe integer constants', () => {
    // would expect this to fail but it passes
    expect(Math.pow(2,53)).toEqual(Math.pow(2,53)+1);
    expect(Math.pow(2,53)+3).toEqual(Math.pow(2,53)+5);

    expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2,53)-1);
    expect(Number.MIN_SAFE_INTEGER).toBe(Math.pow(2,53)*-1+1);
  });

  it('Indicates safe integers with isSafeInteger', () => {
    expect(Number.isSafeInteger(9007199254740991)).toBe(true);
    expect(Number.isSafeInteger(9007199254740992)).toBe(false);
  });

});
