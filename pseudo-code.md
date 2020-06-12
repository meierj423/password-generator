        # Password Generator App

    WHEN user clicks "Generate Password" button

    PROMPT user for password length
    INIT length := user input from prompt


    IF 8 < length < 218
        THEN
        INIT useSpecial := CONFIRM special characters
        INIT useNums := CONFIRM numeric characters
        INIT useLower := CONFIRM lower case characters
        INIT useUpper := CONFIRM uppercase characters

    IF useSpecial OR useNums OR useLower OR useUpper
        THEN
            generate password containing the correct types and length
        END IF
    ELSE
        ALERT password length error message




