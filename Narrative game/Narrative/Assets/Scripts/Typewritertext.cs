using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using Debug = System.Diagnostics.Debug;

public class Typewritertext : MonoBehaviour
{
	private TextMeshProUGUI _textMeshProUgui;
	public bool DoneTyping;
	private BasicInkExample _inkExample;
	[SerializeField]
	public Button buttonPrefab;




	// Use this for initialization
	private void Start()
	{
		_textMeshProUgui = GetComponent<TextMeshProUGUI>();
		_inkExample = GetComponent<BasicInkExample>();
		//buttonPrefab.interactable = false;
		DoneTyping = false;
		StartCoroutine(Typewrit());
		
	}

	//IEnumerator Redact()


	IEnumerator Typewrit()
	{
		int i = 0;
		while(i < _textMeshProUgui.text.Length)
		{
			buttonPrefab.interactable = false;
			_textMeshProUgui.maxVisibleCharacters = i++;
			yield return new WaitForSeconds(.1f);
		}

		_textMeshProUgui.maxVisibleCharacters = _textMeshProUgui.text.Length;
		
		DoneTyping = true;
	}


}
