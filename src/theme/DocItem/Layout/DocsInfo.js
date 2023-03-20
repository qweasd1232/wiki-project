/**
 * https://github.com/zowe/docs-site/blob/master/src/theme/DocItem/index.js 
 */

import React from "react";
import styles from "./styles.module.css";

function DocsInfo({ docsPluginId, ...props }) {

	const format = (dat) => {
		//获取年月日，时间
		var year = dat.getFullYear();
		var mon = (dat.getMonth()+1) < 10 ? "0"+(dat.getMonth()+1) : dat.getMonth()+1;
		var data = dat.getDate()  < 10 ? "0"+(dat.getDate()) : dat.getDate();
		var hour = dat.getHours()  < 10 ? "0"+(dat.getHours()) : dat.getHours();
		var min =  dat.getMinutes()  < 10 ? "0"+(dat.getMinutes()) : dat.getMinutes();
		var seon = dat.getSeconds() < 10 ? "0"+(dat.getSeconds()) : dat.getSeconds();
		var newDate = year +"-"+ mon +"-"+ data +" "+ hour +":"+ min +":"+ seon;
		return newDate;
	}

	const formatDate = (lastUpdatedAt) => {
		return format(new Date(lastUpdatedAt * 1000))
	}

  return (
    <div className="margin-bottom--lg margin-top-md">
      <div className={styles.docsInfo}>
				{(props.lastUpdatedAt || props.lastUpdatedBy) && (
					<div className={styles.innerInfo}>
						<div className={styles.docLastUpdatedAt}>更新时间</div>
						{props.lastUpdatedAt && (
							<>
								:&nbsp;{" "}
								<time
									className="margin-right--sm"
									dateTime={new Date(
										props.lastUpdatedAt * 1000
									).toISOString()}
								>
									{formatDate(props.lastUpdatedAt)}
								</time>
								{props.lastUpdatedBy && " "}
							</>
						)}
						|
						{/* TODO:(perf) Reading time renders once the content component is mounted, thus it takes some time to load*/}
						<div className="margin-left--sm margin-right--sm">
							{props.readingTimeInWords ? (
								<>{props.readingTimeInWords}</>
							) : (
								<>0 min read</>
							)}
						</div>
						|
						{props.lastUpdatedBy && (
							<div className="margin-left--sm margin-right--sm">
								{`编辑: `}<strong>{props.lastUpdatedBy}</strong>
							</div>
						)}
					</div>
				)}
				{/* Edit URL */}
				<div className="margin-left--sm edit-this-page">
					{props.editUrl && (
						<a href={props.editUrl} target="_blank" rel="noreferrer noopener">
							编辑页面
						</a>
					)}
				</div>
      </div>
    </div>
  );
}

export default DocsInfo;
