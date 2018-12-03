using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Typewritertext : MonoBehaviour
{
	private TextMeshProUGUI _textMeshProUgui;
	private int totalChar;
	private int counter = 0;
	private int visCounter;



	// Use this for initialization
	private void Start()
	{
		_textMeshProUgui = GetComponent<TextMeshProUGUI>();
		totalChar = _textMeshProUgui.textInfo.characterCount;
		_textMeshProUgui.maxVisibleCharacters = visCounter;
		
		StartCoroutine(Typewrit());
	}

	IEnumerator Typewrit()
	{
		int i = 0;
		while(i < _textMeshProUgui.text.Length)
		{
			_textMeshProUgui.maxVisibleCharacters = i++;
			yield return new WaitForSeconds(.153f);
		}

		_textMeshProUgui.maxVisibleCharacters = _textMeshProUgui.text.Length;

	}
}
