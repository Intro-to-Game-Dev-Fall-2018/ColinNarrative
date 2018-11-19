using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ink.Runtime;
using UnityEngine.UI;
using TMPro;

public class InkScript : MonoBehaviour
{
	[SerializeField]
	private TextAsset inkJSONAsset;
	private Story story;

	[SerializeField]
	private Canvas canvas;


	[SerializeField]
	private TextMeshProUGUI textPrefab;
	[SerializeField]
	private Button buttonPrefab;

	private GameObject panel;
	private string text;

	private void Start()
	{
		//RemoveChildren();
		StartStory();
}


	void StartStory () {
		panel = GameObject.Find("Panel");
		story = new Story (inkJSONAsset.text);
		RefreshView();
	}
	

	void RefreshView () {

		//RemoveChildren ();
		

		while (story.canContinue) {
			textPrefab.text = story.Continue ();
			CreateContentView();
		}

		if(story.currentChoices.Count > 0) {
			for (int i = 0; i < story.currentChoices.Count; i++) {
				Choice choice = story.currentChoices [i];
				Button button = CreateChoiceView (choice.text.Trim ());
				button.onClick.AddListener (delegate {
					OnClickChoiceButton (choice);
				});
			}
		}

		else {
			Button choice = CreateChoiceView("End of story.\nRestart?");
			choice.onClick.AddListener(delegate{
				StartStory();
			});
		}
	}


	void OnClickChoiceButton (Choice choice) {
		story.ChooseChoiceIndex (choice.index);
		RefreshView();
	}


	void CreateContentView () {
		textPrefab.text = story.Continue();
		//storyText.text = text;
	}


	Button CreateChoiceView (string text) {

		Button choice = Instantiate (buttonPrefab) as Button;
		choice.transform.SetParent (canvas.transform, false);
		

		Text choiceText = choice.GetComponentInChildren<Text> ();
		choiceText.text = text;


		VerticalLayoutGroup layoutGroup = choice.GetComponent <VerticalLayoutGroup> ();
		layoutGroup.childForceExpandHeight = true;

		return choice;
	}


	void RemoveChildren () {
		int childCount = canvas.transform.childCount;
		for (int i = childCount - 1; i >= 0; --i) {
			GameObject.Destroy (canvas.transform.GetChild (i).gameObject);
		}
	}


}
