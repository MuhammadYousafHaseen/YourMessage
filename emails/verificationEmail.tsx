import {
    Html,
    Head,
    Font,
    Preview,
   
    Row,
    Section,
    Text,
    
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp}: VerificationEmailProps) {
    return(
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Email</title>
                <Font 
                fontFamily="Inter"
                fontWeight="400"
                fontStyle="normal"
                fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
                />
            </Head>
            <Preview>Here&apos;s your verificatio code: {otp}</Preview>
            <Section>
                <Row>
                    <Text>
                        Thanks for registering. Please use the following code to verify your account.
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>

                </Row>
                <Row>
                    <Text>
                        If you didn&apos;t sign up for this account you can safely ignore this email.
                    </Text>
                </Row>
                {/* <Row>
                    <Button href={`http://localhost:3000/verify/${username}`}
                    style={{color: "#fff", backgroundColor: "#4F46E5", borderRadius: "5px", padding: "10px 20px", textDecoration: "none"}}
                    >
                        Verify Here
                    </Button>
                </Row> */}
            </Section>
        </Html>
    );
}