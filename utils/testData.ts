export type NegativeTestData = {
    value: string;
    description: string;
    TestCase: string;
};

export const invalidFirstName: NegativeTestData[] = [
    { value: "", TestCase: "TC_NEG_FN_01", description: "Empty first name" },
    { value: " ", TestCase: "TC_NEG_FN_02", description: "Whitespace only" },
    { value: "123456", TestCase: "TC_NEG_FN_03", description: "Numeric only" },
    { value: "John123", TestCase: "TC_NEG_FN_04", description: "Alphanumeric with numbers" },
    { value: "John@#$", TestCase: "TC_NEG_FN_05", description: "Special characters only" },
    { value: "John@Doe", TestCase: "TC_NEG_FN_06", description: "Special character '@'" },
    { value: "John_Doe", TestCase: "TC_NEG_FN_07", description: "Special character '_'" },
    { value: "John-Doe", TestCase: "TC_NEG_FN_08", description: "Special character '-'" },
    { value: "a".repeat(101), TestCase: "TC_NEG_FN_09", description: "Exceeds maximum length (101 chars)" },
    { value: "  John  ", TestCase: "TC_NEG_FN_10", description: "Leading/trailing spaces" },
    { value: "J", TestCase: "TC_NEG_FN_11", description: "Single character (if minimum length required)" },
    { value: "<script>", TestCase: "TC_NEG_FN_12", description: "XSS injection attempt" }
];

export const invalidLastName: NegativeTestData[] = [
    { value: "", TestCase: "TC_NEG_LN_01", description: "Empty last name" },
    { value: " ", TestCase: "TC_NEG_LN_02", description: "Whitespace only" },
    { value: "98765", TestCase: "TC_NEG_LN_03", description: "Numeric only" },
    { value: "Doe123", TestCase: "TC_NEG_LN_04", description: "Alphanumeric with numbers" },
    { value: "Doe!@#", TestCase: "TC_NEG_LN_05", description: "Special characters only" },
    { value: "Doe@Smith", TestCase: "TC_NEG_LN_06", description: "Special character '@'" },
    { value: "Doe_Smith", TestCase: "TC_NEG_LN_07", description: "Special character '_'" },
    { value: "Doe-Smith", TestCase: "TC_NEG_LN_08", description: "Special character '-'" },
    { value: "a".repeat(101), TestCase: "TC_NEG_LN_09", description: "Exceeds maximum length (101 chars)" },
    { value: "  Doe  ", TestCase: "TC_NEG_LN_10", description: "Leading/trailing spaces" },
    { value: "D", TestCase: "TC_NEG_LN_11", description: "Single character (if minimum length required)" },
    { value: "<img src=x onerror=alert(1)>", TestCase: "TC_NEG_LN_12", description: "XSS injection attempt" }
];

export const invalidEmail: NegativeTestData[] = [
    { value: "@example.com", TestCase: "TC_NEG_01", description: "Missing local part (before @)" },
    { value: "username@", TestCase: "TC_NEG_02", description: "Missing domain (after @)" },
    { value: "usernameexample.com", TestCase: "TC_NEG_03", description: "Missing '@' symbol" },
    { value: "user@@example.com", TestCase: "TC_NEG_04", description: "Multiple '@' symbols" },
    { value: "user name@example.com", TestCase: "TC_NEG_05", description: "Spaces in email" },
    { value: "user\"name@example.com", TestCase: "TC_NEG_06", description: "Invalid special characters in local part" },
    { value: "user..name@example.com", TestCase: "TC_NEG_07", description: "Consecutive dots in local part" },
    { value: ".username@example.com", TestCase: "TC_NEG_08", description: "Dot at start of local part" },
    { value: "username.@example.com", TestCase: "TC_NEG_09", description: "Dot at end of local part" },
    { value: "user@example", TestCase: "TC_NEG_10", description: "Invalid domain format (no dot)" },
    { value: "user@example.123", TestCase: "TC_NEG_11", description: "Invalid TLD with digits" },
    { value: "user@[192.168.1.1]", TestCase: "TC_NEG_12", description: "Domain as IP address (if not allowed)" },
    //{ value: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.com", TestCase: "TC_NEG_13", description: "Very long local part (>64 chars)" },
    //{ value: "üser@example.com", TestCase: "TC_NEG_14", description: "Unicode characters (ASCII-only rule)" },
    { value: "user@example.", TestCase: "TC_NEG_15", description: "Missing TLD after dot" },
    //{ value: "user@example.c", TestCase: "TC_NEG_16", description: "Single-character TLD (if disallowed)" }
];