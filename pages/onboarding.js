import styles from './Utilities.module.css';
import CloseIcon from '../public/images/close.svg';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import StacksLogo from '../public/images/stacks-logo.svg';
import { Octokit } from '@octokit/rest';
import { useEffect } from 'react';
import { ST } from 'next/dist/shared/lib/utils';

//mine
import axios from 'axios'
import Input from "../components/Input";
import Form from "../components/Form";
import Container from "../components/Container";
import TextArea from "../components/TextArea";
import Checkbox from "../components/Checkbox";
import MongoClient from "../lib/mongo";

const MONGODB_API_KEY = process.env.MONGODB_API_KEY;

const Onboarding = () => {
	const { data: session } = useSession();
	useEffect(() => {
		async function refresh() {
			if (session) {
				const github = new Octokit({
					auth: session.accessToken
				});
				await github.request('GET /user');
			}
		}
		if (session) {
			refresh();
		}
	});

let sendOnboardingForm = async() => {
  let formData = JSON.parse(localStorage.getItem("formData"));
  let payload = {
    "dataSource": "Cluster0",
    "database": "grants-dashboard",
    "collection": "test",
    "document": formData
  }
  
  axios.post('https://data.mongodb-api.com/app/data-edfhw/endpoint/data/v1/action/insertOne',payload,{
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      "api-key": MONGODB_API_KEY, //API KEY STORED IN VERCEL
      'Access-Control-Allow-Origin': '*'
    }
  })
  console.log(formData);
}
	return (
        <div>
			<Link href="/">
				<a>
					<div className={styles.close}>
						<p>
							<CloseIcon />
							Close
						</p>
						<span></span>
					</div>
				</a>
			</Link>
			<div className={styles.utilitiesWrapper}>
				<h1>Grants Onboarding</h1>
				<p className={styles.descriptor}>A simple widget for providing private information for receiving grant payments</p>

    <Form>
      <Container>
        <Input
          name="firstName"
          label="First Name"
        />
        <Input
          name="lastName"
          label="Last Name"
        />
      </Container>
      <Container>       
        <Input
          name="email"
          label="Email" 
         />
      </Container>
      <Container>
        <Input
          name="STXWalletAddress"
          label="STX Wallet Address"
        />
        <div>
        <Input
          name="STWWalletMemo"
          label="STX Wallet Memo"
         // maxchar={30} 
        />
          <Checkbox
            id="confirmMemoRequired"
            value="I confirm no memo is required"
            labelColor="rgba(255, 255, 255, 0.8)"
        />
         </div>
      </Container>
      <Container>
        <Input
          name="countryOfResidence"
          label="Country of Residence"
        />
        <Input
          name="anticipatedCompletionDate"
          label="Anticipated Completion Date"
          isDate={true}
        />
      </Container>

    </Form>
    		<div className={styles.buttonWrapper}>
					<div>
						<button onClick={() => sendOnboardingForm()}>Click to Submit</button>
					</div>
				</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};


export default Onboarding;
