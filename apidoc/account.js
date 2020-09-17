/**
 * @api {get} /visitor 搜索访客
 * @apiGroup account
 * @apiParam {String="active","notActive","subscribe","unsubscribe"} [status=all] 访客状态
 */

/**
 * @api {put} /visitor/label 添加标签
 * @apiGroup account
 * @apiParam {String[]} visitors 需要添加标签的访客
 * @apiParam {String[]} tags 需要添加的标签 
 * 
 */

 /**
  * @api {put} /visitor/assignee 访客批量设置客服
  * @apiGroup account
  * @apiParam {String[]} visitors 需要修改的访客
  * @apiParam {String} assignee 修改目标客服
  */