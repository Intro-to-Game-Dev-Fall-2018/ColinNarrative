﻿using System;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using Ink.Runtime;
using TMPro;
using Debug = System.Diagnostics.Debug;
using System.Collections.Generic;

// This is a super bare bones example of how to play and display a ink story in Unity.
public class BasicInkExample : MonoBehaviour
{
	public List<GameObject> _panelList;
	public AudioClip typesound;
	private AudioSource audio;
	
	private	void Start()
	{
		// Remove the default message
		RemoveChildren();
		_panelList = new List<GameObject>();
		StartStory();
	}


	// Creates a new Story object with the compiled story which we can then play!
	void StartStory () {
		story = new Story (inkJSONAsset.text);
		RefreshView();
		audio = GetComponent<AudioSource>();
	}

	IEnumerator StoryContinue()
	{
		yield return new WaitForSeconds(3f);
		RefreshView();
	}


	// This is the main function called every time the story changes. It does a few things:
	// Destroys all the old content and choices.
	// Continues over all the lines of text, then displays all the choices. If there are no choices, the story is finished!
	void RefreshView () {
		// Remove all the UI on screen
		RemoveChildren ();
		
		// Read all the content until we can't continue any more
		while (story.canContinue) {
			// Continue gets the next line of the story
			string text = story.Continue ();
			// This removes any white space from the text.
			text = text.Trim();
			// Display the text on screen!
			CreateContentView(text);
			//StartCoroutine(StoryContinue());
		}

		// Display all the choices, if there are any!
		if((story.currentChoices.Count > 0)){
			for (int i = 0; i < story.currentChoices.Count; i++) {
				Choice choice = story.currentChoices [i];
				Button button = CreateChoiceView (choice.text.Trim ());
				// Tell the button what to do when we press it
				button.onClick.AddListener (delegate {
					OnClickChoiceButton (choice);

					//StartCoroutine(StoryContinue());
				});
			}
		}
		// If we've read all the content and there's no choices, the story is finished!
		else {
			Button choice = CreateChoiceView("End of story.\nRestart?");
			choice.onClick.AddListener(delegate{
				StartStory();
			});
		}
	}

	// When we click the choice button, tell the story to choose that choice!
	void OnClickChoiceButton (Choice choice) {
		story.ChooseChoiceIndex (choice.index);
		audio.clip = typesound;
		audio.PlayOneShot(typesound);

		
		RefreshView();
	}

	// Creates a button showing the choice text
	void CreateContentView (string text) {
		TextMeshProUGUI storyText = Instantiate (textPrefab) as TextMeshProUGUI;
		storyText.text = text;
		storyText.transform.SetParent (canvas.transform, false);
		_panelList.Add(textPrefab.gameObject);
		UnityEngine.Debug.Log(_panelList);
	}

	// Creates a button showing the choice text
	Button CreateChoiceView (string text) {
		// Creates the button from a prefab
		Button choice = Instantiate (buttonPrefab) as Button;
		choice.transform.SetParent (canvas.transform, false);
		
		// Gets the text from the button prefab
		TextMeshProUGUI choiceText = choice.GetComponentInChildren<TextMeshProUGUI> ();
		choiceText.text = text;

		// Make the button expand to fit the text
	    HorizontalLayoutGroup layoutGroup = choice.GetComponent <HorizontalLayoutGroup> ();
		layoutGroup.childForceExpandHeight = false;

		return choice;
	}

	// Destroys all the children of this gameobject (all the UI)
	void RemoveChildren () {
		int childCount = canvas.transform.childCount;
		for (int i = childCount - 1; i >= 0; --i) {
			GameObject.Destroy (canvas.transform.GetChild (i).gameObject);
		}
	}

	private void FixedUpdate()
	{
		foreach (GameObject panel in _panelList)
		{
//			GetComponent<TextMeshProUGUI>().fontStyle = FontStyles.Strikethrough;
			if (panel.GetComponent<Typewritertext>().DoneTyping.Equals(true))
			{
				UnityEngine.Debug.Log("Is done typing");
				buttonPrefab.interactable = true;
				UnityEngine.Debug.Log("interactable");
			}
			else
			{
				buttonPrefab.interactable = false;
				UnityEngine.Debug.Log("Not interactable");
			}
		}

	}


	[SerializeField]
	private TextAsset inkJSONAsset;
	private Story story;
	public GameObject gameogj;
	public Typewritertext typescript;

	[SerializeField]
	private Canvas canvas;
	public  Canvas buttonCanvas;

	// UI Prefabs
	[SerializeField]
	private TextMeshProUGUI textPrefab;

	[SerializeField]
	private Button buttonPrefab;
}